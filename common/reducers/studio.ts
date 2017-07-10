import { CHANGE_STUDIO } from "../actions/studio";

export function studioReducer(state = {}, action: any) {
    switch (action.type) {
        case CHANGE_STUDIO:
            return action.studio;
        default:
            return state;
    }
}
