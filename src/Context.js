import { useState, createContext } from 'react';

export const Context = createContext();


export const Provider = (props) => {
    const [number, setNumber] = useState(0)
    const [theme, setTheme] = useState('light-theme')

    const providerValue = {
        theme, setTheme,
        number, setNumber,
        incriment: () => setNumber((n) => n + 1),
        decriment: () => setNumber((n) => n - 1)
    }

    return (
        <>
            <Context.Provider value={providerValue} >
                {props.children}
            </Context.Provider>
        </>
    )
}