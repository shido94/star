import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-five-start',
  templateUrl: './five-start.component.html',
  styles: []
})
export class FiveStartComponent {

  @Input() rating = 0;

  @Output() onRatingChange =  new EventEmitter<number>();


  setRating(rating: number) {
    this.rating = rating;

    this.onRatingChange.next(99);
  }

}
