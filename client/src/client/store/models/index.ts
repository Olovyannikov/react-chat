import auth from './auth';

export interface RootModel {
    auth: typeof auth;
}

export const models: RootModel = { auth };
