import {Store} from '@ngrx/store';
import {areVideosLoaded, areVideosLoading, getVideos, State} from '../state';
import {ApiService} from '../services/api.service';
import {Observable} from 'rxjs/Observable';
import {Videos} from '../models/videos';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/take';
import {filter, take} from 'rxjs/operators';
import {AddVideoAction, SetLoadingVideoAction} from '../actions/video';


@Injectable()
export class VideoManager {
  constructor(private store: Store<State>, private apiService: ApiService) {
  }
  public getVideos(): Observable<Videos[]> {
    const loading$ = this.store.select(areVideosLoading);
    const loaded$ = this.store.select(areVideosLoaded);
    loading$.combineLatest(loaded$, (loading, loaded) => !loading && !loaded)
      .pipe(
        take(1),
        filter(v => v)
      )
      .subscribe( () => {
        this.store.dispatch(new SetLoadingVideoAction(true));
        this.apiService.getVideos().subscribe(videos => {
          this.store.dispatch(new AddVideoAction(videos));
        }, () => {
          this.store.dispatch(new SetLoadingVideoAction(false));
        });
      });
    return this.store.select(getVideos);
  }
}
