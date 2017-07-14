import { Dispatch } from "redux";

import { api } from "../../common/utils";
import apis from "../../common/apisUrl";

import { KindergartenBasic } from "../interfaces/kindergarten";
import { updateSEO } from "../actions/common";

export const UPDATE_KINDERGARTEN = "UPDATE_KINDERGARTEN";

export function fetchKindergarten({ kid }: { kid: number }) {
    return (dispatch: Dispatch<any>) => {
        return api
            .post(apis.fetchKindergarten, { kid: Number(kid) })
            .then(res => {
                const kindergarten: KindergartenBasic = res.data;

                dispatch(updateKindergarten(kindergarten));
                dispatch(
                    updateSEO({
                        title: kindergarten.name,
                        keywords: [kindergarten.name],
                        description: kindergarten.intro
                    })
                );
            });
    };
}

function updateKindergarten(kindergarten: KindergartenBasic) {
    return {
        type: UPDATE_KINDERGARTEN,
        kindergarten
    };
}
