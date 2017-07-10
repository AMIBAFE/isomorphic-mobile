import { Dispatch } from "redux";

import { api, correctApiUrl } from "../../common/utils";
import apis from "../../common/apisUrl";

import { updateSEO } from "../actions/common";

import { StudioBasic } from "../interfaces/studio";

export const FETCH_STUDIO_DETAIL = "FETCH_STUDIO_DETAIL";
export const CHANGE_STUDIO = "CHANGE_STUDIO";

export function fetchStudioDetail({ sid }: { sid: number }) {
    return (dispatch: Dispatch<any>) => {
        return api
            .post(correctApiUrl(apis.fetchStudioDetail), { id: Number(sid) })
            .then(res => {
                const studio: StudioBasic = res.data;

                dispatch(changeStudio(studio));
                dispatch(
                    updateSEO({
                        title: studio.name,
                        keywords: [studio.name],
                        description: studio.intro
                    })
                );
            });
    };
}

function changeStudio(studio: StudioBasic) {
    return {
        type: CHANGE_STUDIO,
        studio
    };
}
