import React from "react"
import { Action } from "./action"

export const startState: GlobalState = {
    name: undefined,
    cards: [],
    dispatch: (() => null) as React.Dispatch<Action>
}

export type GlobalState = {
    name?: string,
    cards: Card[],
    dispatch: React.Dispatch<Action>
}

export type Card = {
    number?: number,
    cvc?: number,
    expiry?: string
}

