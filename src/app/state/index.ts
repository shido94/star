import {_areVideosLoaded, _areVideosLoading, videoAdapter, videoReducer, VideoState} from './videos';
import {emailReducer, EmailState} from './emails';
import {appReducer, AppState} from './app';
import { ActionReducerMap, createSelector} from '@ngrx/store';

export interface State {
  videos: VideoState;
  emails: EmailState;
  app: AppState;
}

export const reducers: ActionReducerMap<State> = {
  videos: videoReducer,
  emails: emailReducer,
  app: appReducer
};

export const getVideoState = (state: State) => state.videos;

const videoSelectors = videoAdapter.getSelectors(getVideoState);
export const getVideos = videoSelectors.selectAll;

// export const {selectAll: getVideos, selectTotal: getVidoesCount} = videoAdapter.getSelectors(getVideoState);

export const areVideosLoading = createSelector(getVideoState, _areVideosLoading);
export const areVideosLoaded = createSelector(getVideoState, _areVideosLoaded);
