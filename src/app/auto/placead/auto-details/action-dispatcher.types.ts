import { AutoDetailsType } from './types';

export interface AutoDetailsDispatcherType {
    updateDetails: (data: AutoDetailsType) => void;
}