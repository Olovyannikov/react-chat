import { IRoomModel } from 'client/models/IRoom.model';
import { DetailedHTMLProps, FormHTMLAttributes } from 'react';

export interface LoginFormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    loggedHandler: (obj: IRoomModel) => void;
    getValues?: (values: IRoomModel) => void;
    isLoading?: boolean;
}
