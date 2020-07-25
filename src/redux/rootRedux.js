import {DECREMENT, INCREMENT} from "./types";

export function rootReduce(state, action) {
    if (action.type === INCREMENT) {
        return state + 1
    } else if (action.type === DECREMENT) {
        return state - 1
    }
    return state
}