import { UPDATE_AUTO_AD_DETAILS } from './ad-details/action-titles';
import { AutoAction } from './action-creator.types';
import { AutoType } from '../auto.type';
import { UPDATE_AUTO_DETAILS } from './auto-details/action-titles';
import { AutoAdDetailsType } from './ad-details/types';
import { AutoDetailsType } from './auto-details/types';

export const INITIAL_STATE: AutoType = {
    title: 'this is a test',
    mobile: '',
    location: '',
    description: '',
    make: '',
    kilometers: '',
    model: '',
    bodyType: '',
    trim: '',
    engineSize: '',
    year: 1990,
    price: 0
  
};

export const autoReducer = ( state: AutoType = INITIAL_STATE, action: AutoAction ): AutoType => {
      console.log('update action', action);
      switch (action.type) {
          case UPDATE_AUTO_DETAILS: {
              const payload = (action.payload as AutoDetailsType);
              return { 
                ...(state as AutoType), 
                make: payload.make,
                kilometers: payload.kilometers,
                model: payload.model,
                bodyType: payload.bodyType,
                trim: payload.trim,
                engineSize: payload.engineSize,
                year: payload.year,
                price: payload.price
              };
            }
            case UPDATE_AUTO_AD_DETAILS: {
              const payload = (action.payload as AutoAdDetailsType);
              return { 
                ...(state as AutoType), 
                title: payload.title,
                mobile: payload.mobile,
                location: payload.location,
                description: payload.description,
              };
           }
          default:
            return state;  
      }
};