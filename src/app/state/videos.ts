import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {Videos} from '../models/videos';
import {PayloadAction} from '../actions';
import {VIDEOS_ADD_ACTION, VIDEOS_APPEND_ACTION, VIDEOS_DELETE_ACTION} from '../actions/video';

export interface VideoState extends EntityState<Videos> {
  loading: boolean;
  loaded: boolean;
}

export const videoAdapter = createEntityAdapter<Videos>({
  selectId: video => video.id
});

const initialState: VideoState = videoAdapter.getInitialState({
  loading: false,
  loaded: false
});

export function videoReducer(currentState: VideoState = initialState, action: PayloadAction): VideoState {
  switch (action.type) {
    case VIDEOS_ADD_ACTION: {
      return videoAdapter.addAll(action.payload, currentState);
    }
    case VIDEOS_APPEND_ACTION: {
      return videoAdapter.addMany(action.payload, currentState);
    }
    case VIDEOS_DELETE_ACTION: {
      return videoAdapter.removeOne(action.payload, currentState);
    }
    default:
      return currentState;
  }
}

export const _areVideosLoading = (state: VideoState) => state.loading;
export const _areVideosLoaded = (state: VideoState) => state.loaded;
