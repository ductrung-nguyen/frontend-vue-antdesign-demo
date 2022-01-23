import { getStorageShortName } from '/@/utils/env';
import { createStorage as create, CreateStorageParams } from './storageCache';
import { enableStorageEncryption } from '/@/settings/encryptionSetting';
import { DEFAULT_CACHE_TIME } from '/@/settings/encryptionSetting';

export type Options = Partial<CreateStorageParams>;

const createOptionsFunc = (storage: Storage, options: Options = {}): Options => {
  return {
    // No encryption in debug mode
    hasEncrypt: enableStorageEncryption,
    storage,
    prefixKey: getStorageShortName(),
    ...options,
  };
};

// export the default WebStorage object (using Session Storage API)
export const WebStorage = create(createOptionsFunc(sessionStorage));

// export function to create a custom storage
export const createStorage = (storage: Storage = sessionStorage, options: Options = {}) => {
  return create(createOptionsFunc(storage, options));
};

// export function to create a Storage using session Storage API with given options
export const createSessionStorage = (options: Options = {}) => {
  return createStorage(sessionStorage, { ...options, timeout: DEFAULT_CACHE_TIME });
};

// export function to create a Storage using Local Storage API with given options
export const createLocalStorage = (options: Options = {}) => {
  return createStorage(localStorage, { ...options, timeout: DEFAULT_CACHE_TIME });
};

export default WebStorage;
