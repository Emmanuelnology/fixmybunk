import { Component, OnInit, Input } from '@angular/core';

interface IReview {
  name: string;
  startRating: number;
  description: string;
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() review: IReview;

  constructor() { }

  ngOnInit() {
  }

}
