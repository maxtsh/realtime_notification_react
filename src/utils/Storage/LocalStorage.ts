const LS = localStorage || window.localStorage;

// General Write To LS
export function writeToLS(data: any, key: string) {
  if (data && key) {
    try {
      const strData = JSON.stringify(data);
      if (isExist(key)) {
        LS.removeItem(key);
        LS.setItem(key, strData);
      } else {
        LS.setItem(key, strData);
      }
    } catch (err) {
      console.log(err);
    }
  }
}

// General Read To LS
export function readFromLS(key: string) {
  if (key) {
    if (isExist(key)) {
      try {
        const data: any = JSON.parse(LS.getItem(key) || "{}");
        return data;
      } catch (err) {
        console.log(err);
      }
    } else {
      return null;
    }
  }
  return null;
}

// Clear Item from LS
export function clearFromLS(key: string | string[]): void {
  if (Array.isArray(key)) {
    key.forEach((k: string) => isExist(k) && LS.removeItem(k));
  } else {
    if (isExist(key)) LS.removeItem(key);
  }
}

// Checking If a data alread exists
export function isExist(key: string) {
  if (key && LS.getItem(key)) return true;
  return false;
}
