import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  // ratingVariable: number;
  // noOfGreyStars: number ;

  stars: boolean[] = [true, true, true, false, false];
  
  // starList: boolean[] = [true, true, true, true, true];
  // rating: number;

  // @Input() isRequired = true;

  constructor() { }

  // setStar(data: any) {
  //   this.rating = data + 1;
  //   for (let i = 0; i <= 4; i++) {
  //     if (i <= data) {
  //       this.starList[i] = false;
  //     } else {
  //       this.starList[i] = true;
  //     }
  //   }
  // }  

  ngOnInit() {
    // this.ratingVariable = 3;
    // this.noOfGreyStars = 5 - this.ratingVariable;
    // console.log(this.ratingVariable + this.noOfGreyStars);
  }
  
}
