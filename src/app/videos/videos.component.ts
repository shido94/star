import { Component, OnInit } from '@angular/core';

import {Videos} from '../models/videos';
import {debounceTime, distinctUntilChanged, take} from 'rxjs/operators';
import {VideoManager} from '../managers/managers.component';
import {Observable} from 'rxjs/Observable';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: Videos[];

  searchControl = new FormControl();

  constructor(private videoManager: VideoManager) {
  }

  ngOnInit() {
    const videos$ = this.videoManager.getVideos();

    videos$.subscribe(videos => {
      this.videos = videos;
    });

    const search$ = this.searchControl.valueChanges.pipe(
      debounceTime(100),
      distinctUntilChanged()
    )as Observable<string>;

    videos$.combineLatest(search$, (videos: Videos[], keyword: string) =>
      videos.filter(video => video.title.indexOf(keyword) !== -1)
    ).subscribe(videos => this.videos = videos);
  }
}
