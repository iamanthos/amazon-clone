import React, { createContext, useContext, useReducer } from 'react';

// DATA LAYER
export const StateContext = createContext();

// PROVIDER

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider  value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// How we use inside a component

export const useStateValue = () => useContext(StateContext);