/**
 * interface SimpleEventEmitter {
 *      on(event: string, listener: any): void;
 *      once(event: string, listener: any): void;
 *      removeListener(event: string, listener: any): void;
 *      off(event: string, listener: any): void;
 * }
 *
 * interface EIP1193Provider extends SimpleEventEmitter {
 *      on(event: 'connect', listener: (info: { chainId: number }) => void): void;
 *      on(event: 'disconnect', listener: (error: { code: number; message: string }) => void): void;
 *      on(event: 'message', listener: (message: { type: string; data: unknown }) => void): void;
 *      on(event: 'chainChanged', listener: (chainId: string) => void): void;
 *      on(event: 'accountsChanged', listener: (accounts: string[]) => void): void;
 *      request(args: RequestArguments): Promise<unknown>;
 * }
 *
 * interface RequestArguments {
 *     method: string;
 *     params?: unknown[] | object;
 * }
 *
 * interface ProviderInfo {
 *     uuid: string;
 *     name: string;
 *     description: string;
 *     icons: string;
 * }
 *
 * interface ProviderWithInfo extends EIP1193Provider {
 *    info: ProviderInfo;
 * }
 *
 *
 * interface EVMProvider{
 *      // index is wallet_name
 *      [index: string]: ProviderWithInfo;
 * }
 *
 *
 */

/**
 * To Implement:
 * interface ProviderRpcError extends Error {
 *    message: string;
 *    code: number;
 *    data?: unknown;
 * }
 */

/**
 * Message from the request method are send via the type `chaiwallet_request`
 * responces are send via the type `chaiwallet_response`
 * errors are send via the type `chaiwallet_error`
 *
 * for on `message` event listener the message from extension are
 * sent via the type `chaiwallet_message`
 */

class ProviderRpcError extends Error {
  constructor(code, data) {
    let message;
    if (code === 4001) {
      message = 'User Rejected Request';
    } else if (code === 4100) {
      message = 'Unauthorized';
    } else if (code === 4200) {
      message = 'Unsupported Method';
    } else if (code === 4900) {
      message = 'Disconnected';
    } else if (code === 4901) {
      message = 'Chain Disconnected';
    }
    super(message);
    this.code = code;
    this.data = data;
  }
}

class ProviderInfo {
  constructor({ uuid, name, description, icons }) {
    this.uuid = uuid;
    this.name = name;
    this.description = description;
  }
}

class SimpleEventEmitter {
  constructor() {
    this._events = [];
  }
  on(event, listener) {
    this._events = this._events || {};
    this._events[event] = this._events[event] || [];
    this._events[event].push(listener);
  }
  emit(event, ...args) {
    this._events = this._events || {};
    if (event in this._events === false) {
      return;
    }
    this._events[event].forEach((listener) => {
      listener.apply(this, args);
    });
  }
  addListener(event, listener) {
    this.on(event, listener);
  }
  removeListener(event, listener) {
    this._events = this._events || {};
    if (event in this._events === false) {
      return;
    }
    this._events[event].splice(this._events[event].indexOf(listener), 1);
  }
}

class EIP1193Provider extends SimpleEventEmitter {
  constructor() {
    super();
  }

  on(event, listener) {
    super.on(event, listener);
    if (event === 'connect') {
      this._connect();
    } else if (event === 'disconnect') {
      this._disconnect();
    } else if (event === 'chainChanged') {
      this._chainChanged();
    } else if (event === 'accountsChanged') {
      this._accountsChanged();
    } else if (event === 'message') {
      this._message();
    }
  }

  removeListener(event, listener) {
    super.removeListener(event, listener);
  }

  _connect() {
    window.postMessage(
      {
        type: 'chaiwallet_connect',
      },
      '*'
    );
    window.addEventListener('message', (event) => {
      if (event.data.type === 'chaiwallet_connected') {
        this.emit('connect', { chainId: event.data.data.chainId });
      }
    });
  }

  _disconnect() {
    window.postMessage(
      {
        type: 'chaiwallet_disconnect',
      },
      '*'
    );
    window.addEventListener('message', (event) => {
      if (event.data.type === 'chaiwallet_disconnected') {
        this.emit('disconnect', {
          code: event.data.data.code,
          message: event.data.data.message,
        });
      }
    });
  }

  _chainChanged() {
    window.addEventListener('message', (event) => {
      if (event.data.type === 'chaiwallet_chainChanged') {
        this.emit('chainChanged', event.data.data.chainId);
      }
    });
  }

  _accountsChanged() {
    window.addEventListener('message', (event) => {
      if (event.data.type === 'chaiwallet_accountsChanged') {
        this.emit('accountsChanged', event.data.data.accounts);
      }
    });
  }

  _message() {
    window.addEventListener('message', (event) => {
      if (event.data.type === 'chaiwallet_message') {
        this.emit('message', {
          type: event.data.data.type,
          data: event.data.data.data,
        });
      }
    });
  }

  request({ method, params }) {
    return new Promise((resolve, reject) => {
      window.postMessage(
        {
          type: 'chaiwallet_request',
          data: {
            method,
            params,
            jsonrpc: '2.0',
          },
        },
        '*'
      );
      window.addEventListener('message', (event) => {
        if (event.data.type === 'chaiwallet_response') {
          resolve(event.data.data);
        } else if (event.data.type === 'chaiwallet_error') {
          reject(
            new ProviderRpcError(event.data.data.code, event.data.data.data)
          );
        }
      });
    });
  }
}

class ProviderWithInfo extends EIP1193Provider {
  constructor({ uuid, name, description, icons }) {
    super();
    this.info = new ProviderInfo({ uuid, name, description, icons });
  }
}

window.evmproviders = {
  ChaiWallet: new ProviderWithInfo({
    uuid: '65513946-a275-4dbe-b1fb-2bdb9fe7c44b',
    name: 'Chai Wallet',
    description: 'Chai Wallet',
    icons: ['https://chaiwallet.io/favicon.ico'],
  }),
};
