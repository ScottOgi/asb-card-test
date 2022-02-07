import produce from "immer";
import { Action, SUBMIT } from "./action";
import { GlobalState } from "./startState";

export const Reducer = produce((draft: GlobalState, action: Action) => {
    switch (action.type) {
        case SUBMIT:
            console.log(action.card)
            draft.card = action.card
            break
        
        default:
            return draft
    }
})