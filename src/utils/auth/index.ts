import { PersistentHelper, BasicKeys } from '/@/utils/cache/persistent';
import { CacheTypeEnum } from '/@/enums/cacheEnum';
import projectSetting from '/@/settings/projectSetting';
import { TOKEN_KEY } from '/@/enums/cacheEnum';

const { permissionCacheType } = projectSetting;
const isLocal = permissionCacheType === CacheTypeEnum.LOCAL;

// Get authenticated token from the localStorage or from cookie, depends on the cache type
export function getToken() {
  return getAuthCache(TOKEN_KEY);
}

// Get authenticated token from the localStorage or from cookie with a given key, depends on the cache type
export function getAuthCache<T>(key: BasicKeys) {
  const fn = isLocal ? PersistentHelper.getLocal : PersistentHelper.getSession;
  return fn(key) as T;
}

// Save the authenticated token to the localStorage or to cookie with a given key, depends on the cache type
export function setAuthCache(key: BasicKeys, value) {
  const fn = isLocal ? PersistentHelper.setLocal : PersistentHelper.setSession;
  return fn(key, value, true);
}

// Clear the authentication cache
export function clearAuthCache(immediate = true) {
  const fn = isLocal ? PersistentHelper.clearLocal : PersistentHelper.clearSession;
  return fn(immediate);
}
