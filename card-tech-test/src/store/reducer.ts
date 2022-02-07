import produce from "immer";
import { Action, SUBMIT, UPDATE } from "./action";
import { Card, GlobalState } from "./startState";

export const Reducer = produce((draft: GlobalState, action: Action) => {
    switch (action.type) {
        case SUBMIT:
            console.log(action.card)
            draft.cards?.push(action.card as Card)
            break

        case UPDATE:
            draft.name = action.name
            break
        
        default:
            return draft
    }
})