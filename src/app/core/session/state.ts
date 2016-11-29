import { User, Error } from  './models';

export interface State {
  user: User;
  hasError: boolean;
  isLoading: boolean;
  error: Error;
  initalized: boolean;
}

export const initialState = {
  user: null,
  hasError: false,
  isLoading: false,
  error: null,
  initalized: false,
}
