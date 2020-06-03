import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// temporary, will come in from another source
const initialState = {
    transactions: [
        { id: 1, text: 'Tacos', amount: -12 },
        { id: 2, text: 'Movies', amount: 46 },
        { id: 3, text: 'Freelancer', amount: 1200 },
        { id: 4, text: 'Rent', amount: -1000 },
    ]
}

// context
export const GlobalContext = createContext(initialState);

// provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>);
}