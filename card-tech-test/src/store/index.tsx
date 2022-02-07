import React, { createContext, useContext, useReducer } from 'react'
import { Action } from './action'
import { Reducer } from './reducer'
import { startState, GlobalState } from './startState'

export const StateCtx = createContext(startState)

export const DispatchCtx = createContext((() => null) as React.Dispatch<Action>)

export const StoreProvider: React.ComponentType = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, startState)

    return (
        <DispatchCtx.Provider value={dispatch}>
            <StateCtx.Provider value={{...state, dispatch} as GlobalState}>{children}</StateCtx.Provider>
        </DispatchCtx.Provider>
    )
}