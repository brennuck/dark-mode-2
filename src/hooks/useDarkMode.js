import { useEffect } from 'react';

import useLocalStorage from './useLocalStorage';

const useDarkMode = (key) => {
    const [values, setValues] = useLocalStorage(key);

    useEffect(() => {
        const body = document.querySelector("body");
        if (values) {
            body.className = "dark-mode"
        } else {
            body.className = ""
        }
    }, [values])
    return [values, setValues]
}

export default useDarkMode;