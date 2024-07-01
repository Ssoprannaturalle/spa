

// Local Storage
export const saveToLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const loadFromLocal = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  
  export const removeFromLocal = (key) => {
    localStorage.removeItem(key);
  };
  
  // Session Storage
  export const saveToSession = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  };
  
  export const loadFromSession = (key) => {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  
  export const removeFromSession = (key) => {
    sessionStorage.removeItem(key);
  };