import React from "react"
import { Action } from "./action"

export const startState: GlobalState = {
    name: 'Luke Agius',
    card: {
        number: 123123,
        expiry: undefined,
        cvc: undefined
    },
    dispatch: (() => null) as React.Dispatch<Action>
}

export type GlobalState = {
    name?: string,
    card?: Card,
    dispatch: React.Dispatch<Action>
}

export type Card = {
    number?: number,
    cvc?: number,
    expiry?: string
}

