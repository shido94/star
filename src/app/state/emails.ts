import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {Email} from '../models/email';
import {PayloadAction} from '../actions';

export interface EmailState extends EntityState<Email> {
  videos: {
    [id: number]: number[]
  };
}

export const emailAdapter = createEntityAdapter<Email>({
  selectId: email => email.id
});

const initialState: EmailState = emailAdapter.getInitialState({
  videos: null
});

export function emailReducer(currentState: EmailState = initialState, action: PayloadAction): EmailState {
  return currentState;
}

