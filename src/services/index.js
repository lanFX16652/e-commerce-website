export const PRODUCT_STORAGE_KEY = "PRODUCT_STORAGE_KEY";

export const LocalStorageService = {
  store: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  load: (key) => {
    const items = JSON.parse(localStorage.getItem(key));
    if (items) {
      return items;
    } else {
      return null;
    }
  },
};
