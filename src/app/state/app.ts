import {Users} from '../models/users';
import {PayloadAction} from '../actions';

export interface AppState {
  user: Users;
  sidebarOpen: boolean;
}

const initialState: AppState = {
  user: null,
  sidebarOpen: true
};

export function appReducer(currentState: AppState = initialState, action: PayloadAction): AppState {
  return currentState;
}
