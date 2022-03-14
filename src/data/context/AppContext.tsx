import { createContext, useState } from "react";

type Thema = 'dark' | ''
interface AppContextProps {
    thema?: Thema
    alterThema?: () => void
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props) {
    const [thema , setThema] = useState<Thema>('');

    function alterThema() {
        setThema(thema === '' ? 'dark' : '')
    }

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