import { FileActionType } from '../action-creators/action.types';
import * as actions from '../action-creators/action-titles';
import { FileUploadStateType } from '../state';

const INITIAL_STATE: FileUploadStateType = {
   filesToUpload: [],
   filesUploaded: []
};

export const fileUploadReducer = (state = INITIAL_STATE, action: FileActionType) => {
   
  console.log('action', action);
  switch (action.type) {
     
     case actions.FILES_TO_UPLOAD_ACTION: {

      return {
             ...state,
             filesToUpload: [...action.payload]
       };
     }

     case actions.FILE_UPLOADED_ACTION: {
      
      return state;
     }

     default: 
        return state;

  }

};