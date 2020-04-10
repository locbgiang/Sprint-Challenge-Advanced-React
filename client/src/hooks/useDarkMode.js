import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [darkModeOn, setDarkModeOn] = useLocalStorage('key');
    useEffect(() => {
        if(darkModeOn){
            document.body.classList.add("dark-mode");
        }else{
            document.body.classList.remove("dark-mode");
        }
    }, [darkModeOn]);
    return [darkModeOn, setDarkModeOn];
}