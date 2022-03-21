import { createContext, useEffect, useState } from "react";
interface AppContextProps {
    thema?: string
    alterThema?: () => void
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props) {
    const [thema , setThema] = useState('');

    function alterThema() {
        const currentTheme = thema === '' ? 'dark' : ''
        localStorage.setItem('thema', currentTheme)
        setThema(currentTheme)
    }

    useEffect(() => {
        const thema = localStorage.getItem('thema')
        setThema(thema)
    })

    return (
        <AppContext.Provider value={{
            thema: thema,
            alterThema
        }}>
            {props.children}
        </AppContext.Provider>
    );
}
export default AppContext;