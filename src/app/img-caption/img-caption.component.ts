import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-img-caption',
  templateUrl: './img-caption.html',
  styleUrls: ['./img-caption.css']
})
export class ImgCaptionComponent implements OnInit, OnChanges {
  @Input() url: string;

  private _caption;

  @Input()
  set caption(value: string) {
    this.charLength = 100 - value.length;
    this._caption = value;
  }

  get caption(): string {
    return this._caption;
  }

  // @Input() caption: string;

  charLength: number;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('changes are ', changes);
    //
    // if (changes.caption) {
    //   this.charLength = 100 - this.caption.length;
    // }

    console.log(this.url);

    this.url = 'hello world!';
  }
}
