import crypto from 'crypto';
import { Buffer } from 'buffer';

function encrypt(string, password) {
  let iv = crypto.randomBytes(16);
  let salt = crypto.randomBytes(16);
  let key = crypto.scryptSync(password, salt, 32);
  let cipher = crypto.createCipheriv('aes-256-ctr', key, iv);
  let encrypted = cipher.update(string);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return {
    iv: iv.toString('hex'),
    salt: salt.toString('hex'),
    encryptedData: encrypted.toString('hex'),
  };
}

function decrypt(string, password) {
  let iv = Buffer.from(string.iv, 'hex');
  let salt = Buffer.from(string.salt, 'hex');
  let key = crypto.scryptSync(password, salt, 32);
  let encryptedText = Buffer.from(string.encryptedData, 'hex');
  let decipher = crypto.createDecipheriv('aes-256-ctr', key, iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

export { encrypt, decrypt };
