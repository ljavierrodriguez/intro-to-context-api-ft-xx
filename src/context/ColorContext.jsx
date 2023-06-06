import React, { createContext, useState } from 'react'

export const ColorContext = createContext(null); /* Provider, Consumer */

const AppColorContext = ({ children }) => {
    const [color, setColor] = useState("#cccccc");
    const [name, setName] = useState("John Doe");

    const saludo = () => {
        console.log("Hola Mundo!");
    }

    const value = {
        store: {
            color, 
            name
        },
        actions: {
            setColor,
            setName,
            saludo
        }
    }

    return (
        <>
            <ColorContext.Provider value={value}>
                {children}
            </ColorContext.Provider>
        </>
    )
}

export default AppColorContext