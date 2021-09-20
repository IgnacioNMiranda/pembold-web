type StoreTypes = 'user';

class LocalStorageUtil {
  setItem(key: StoreTypes, value: string | unknown) {
    if (typeof value === 'string') {
      window.localStorage.setItem(key, value);
    } else {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getItem(key: StoreTypes) {
    const storageItem = window.localStorage.getItem(key);

    if (storageItem?.startsWith('{')) {
      return JSON.parse(storageItem);
    }

    return storageItem;
  }

  clear() {
    window.localStorage.clear();
  }
}

export const localStorageUtil = new LocalStorageUtil();
