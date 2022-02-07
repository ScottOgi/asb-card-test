import { Card } from "./startState";

export const SUBMIT = 'SUBMIT'
export const UPDATE = 'UPDATE'

export type Action =
    | { type: typeof SUBMIT; card?: Card }
    | { type: typeof UPDATE; name: string}
