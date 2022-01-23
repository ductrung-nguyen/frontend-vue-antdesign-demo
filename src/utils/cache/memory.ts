export interface Cache<V = any> {
  value?: V;
  timeoutId?: ReturnType<typeof setTimeout>;
  time?: number;
  alive?: number;
}

const NOT_ALIVE = 0;

/**
 * A simple InMemoryCache class
 */
export class Memory<T = any, V = any> {
  private cache: { [key in keyof T]?: Cache<V> } = {};
  private alive: number;

  /**
   * create a new instance of MemoryCache with a given lifetime in second
   * @param alive the default number of seconds which the cached entries can live
   */
  constructor(alive = NOT_ALIVE) {
    // Unit second
    this.alive = alive * 1000;
  }

  /**
   * get the whole cache data
   */
  get getCache() {
    return this.cache;
  }

  /**
   * set the new cache data
   * @param cache
   */
  setCache(cache) {
    this.cache = cache;
  }

  // get<K extends keyof T>(key: K) {
  //   const item = this.getItem(key);
  //   const time = item?.time;
  //   if (!isNullOrUnDef(time) && time < new Date().getTime()) {
  //     this.remove(key);
  //   }
  //   return item?.value ?? undefined;
  // }

  /**
   * get the cached value by key
   * @param key
   * @returns
   */
  get<K extends keyof T>(key: K) {
    return this.cache[key];
  }

  /**
   * set the new value for a given key
   * @param key the key of the cache entry
   * @param value the value of the cache entry
   * @param expires a negative number or zero means we will use the default lifetime duration
   *                or a stricly positive number of seconds
   * @returns
   */
  set<K extends keyof T>(key: K, value: V, expires?: number) {
    let item = this.get(key);

    if (!expires || (expires as number) <= 0) {
      expires = this.alive;
    }
    if (item) {
      if (item.timeoutId) {
        clearTimeout(item.timeoutId);
        item.timeoutId = undefined;
      }
      item.value = value;
    } else {
      item = { value, alive: expires };
      this.cache[key] = item;
    }

    if (!expires) {
      return value;
    }
    const now = new Date().getTime();
    item.time = now + this.alive;
    item.timeoutId = setTimeout(
      () => {
        this.remove(key);
      },
      expires > now ? expires - now : expires,
    );

    return value;
  }

  /**
   * remove a cached value with a given key
   * @param key
   * @returns
   */
  remove<K extends keyof T>(key: K) {
    const item = this.get(key);
    Reflect.deleteProperty(this.cache, key);
    if (item) {
      clearTimeout(item.timeoutId!);
      return item.value;
    }
  }

  /***
   * reset the cache by copying the data from other cached object. only the alive key/values is copied
   */
  resetCache(cache: { [K in keyof T]: Cache }) {
    Object.keys(cache).forEach((key) => {
      const k = key as any as keyof T;
      const item = cache[k];
      if (item) {
        if (item.time) {
          const now = new Date().getTime();
          const expire = item.time;
          if (expire > now) {
            this.set(k, item.value, expire);
          }
        } else {
          this.set(k, item.value, 0);
        }
      }
    });
  }

  /**
   * Clear all cache entries
   */
  clear() {
    Object.keys(this.cache).forEach((key) => {
      const item = this.cache[key];
      item.timeoutId && clearTimeout(item.timeoutId);
    });
    this.cache = {};
  }
}
