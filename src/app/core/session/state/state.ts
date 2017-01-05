import { User } from  '../models';
import { Error } from  '../../shared';

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
