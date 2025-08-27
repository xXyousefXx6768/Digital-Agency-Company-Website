import React, { createContext, useState } from 'react';

export const NavBarStatusContext = createContext();

export function NavBarStatusProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <NavBarStatusContext.Provider value={{ isOpen, setIsOpen}}>
            {children}
        </NavBarStatusContext.Provider>
    );
}