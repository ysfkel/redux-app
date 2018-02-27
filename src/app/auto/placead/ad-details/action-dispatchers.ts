import { Dispatch } from "react-redux";
import { IDetailsDispatch } from "./action-dispatchers.types";
import * as actions from './action-creators'
import { AutoAdDetailsType } from './types'

export const DetailsDispatch = (dispatch: Dispatch<IDetailsDispatch>):IDetailsDispatch => {
    return {
        updateDetails: (details:AutoAdDetailsType) => { 
            dispatch( actions.updateAutoDetailsAction(details));
       }
    };   
};