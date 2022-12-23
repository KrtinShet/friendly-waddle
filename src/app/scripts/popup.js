import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { MutatingDots } from 'react-loader-spinner';
import { store, persistor } from './../Store';
import { decrypt } from './../utils';

import { App } from './../../ui';

const RootApp = () => {
  const { password } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  /**
   *  @todo
   * - check if data is stored in chrome.storage.local
   * - if yes, then load data from chrome.storage.local
   *    - decrypt data
   *    - set decrypted data in chrome.storage.session
   *    - call persistor.persist() to persist data in redux store
   * - if no, then load data from chrome.storage.session
   *   - by calling persistor.persist()
   */
  useEffect(() => {
    async function load() {
      let data = await chrome.storage.local.get('state');

      if (data['state']) {
        const decryptedData = decrypt(data['state'], password);
        await chrome.storage.session.set({ 'persist:root': decryptedData });
        persistor.persist();
      } else {
        persistor.persist();
      }
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return (
      <MutatingDots
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }

  return <App />;
};

const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootApp />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
