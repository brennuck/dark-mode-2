import React from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = setState(() => {
        // Get from local storage by key
       const item = window.localStorage.getItem(key);
       // Parse and return stored json or, if undefined, return initialValue
       return item ? JSON.parse(item) : initialValue;
    })
    const setValue = newValue => {
        setStoredValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue))
    }

    return [storedValue, setValue];
}

export default useLocalStorage;