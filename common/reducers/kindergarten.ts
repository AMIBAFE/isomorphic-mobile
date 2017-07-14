import { KindergartenBasic } from "../interfaces/kindergarten";
import { UPDATE_KINDERGARTEN } from "../actions/kindergarten";

export function kindergartenReducer(
    state = {
        id: 0,
        name: "",
        video: {
            cover: "",
            title: ""
        },
        address: {}
    },
    action: any
) {
    switch (action.type) {
        case UPDATE_KINDERGARTEN:
            return action.kindergarten;
        default:
            return state;
    }
}
