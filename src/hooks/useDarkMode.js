import { useEffect } from 'react';

import useLocalStorage from './useLocalStorage';

const useDarkMode = (key) => {
    const [darkMode, setDarkMode] = useLocalStorage(key);

    useEffect(() => {
        const body = document.querySelector("body");
        if (darkMode) {
            body.className = "dark-mode"
        } else {
            body.className = ""
        }
    }, [darkMode])
    return [darkMode, setDarkMode]
}

export default useDarkMode;