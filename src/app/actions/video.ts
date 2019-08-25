import {PayloadAction} from './index';
import {Videos} from '../models/videos';

export const VIDEOS_ADD_ACTION = '[video] add action';
export const VIDEOS_APPEND_ACTION = '[video] append action';
export const VIDEOS_DELETE_ACTION = '[video] delete action';
export const VIDEOS_UPDATE_ACTION = '[video] update action';
export const VIDEOS_SET_LOADING_ACTION = '[video] set loading action';

export class AddVideoAction implements PayloadAction {
  readonly type = VIDEOS_ADD_ACTION;

  constructor(public payload: Videos[]) {
  }
}

export class AppendVideoAction implements PayloadAction {
  readonly type = VIDEOS_APPEND_ACTION;

  constructor(public payload: Videos[]) {
  }
}

export class DeleteVideoAction implements PayloadAction {
  readonly type = VIDEOS_DELETE_ACTION;

  constructor(public payload: number) {
  }
}

export class SetLoadingVideoAction implements PayloadAction{
  readonly type = VIDEOS_SET_LOADING_ACTION;

  constructor(public payload: boolean) {
  }
}

export class UpdateVidoeAction {
  readonly type = VIDEOS_UPDATE_ACTION;

  constructor(public payload: Videos) {
  }
}
