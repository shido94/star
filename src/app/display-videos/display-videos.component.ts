import {Component, Input, OnInit} from '@angular/core';
import {Videos} from '../models/videos';

@Component({
  selector: 'app-display-videos',
  templateUrl: './display-videos.component.html',
  styleUrls: ['./display-videos.component.css']
})
export class DisplayVideosComponent implements OnInit {
  @Input() video: Videos;

  constructor() { }

  ngOnInit() {
    console.log(this.video);
  }

}
