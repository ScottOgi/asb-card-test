import { Card } from "./startState";

export const SUBMIT = 'SUBMIT'

export type Action =
    | { type: typeof SUBMIT; card?: Card }
