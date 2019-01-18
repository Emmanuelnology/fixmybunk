import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-grid',
  templateUrl: './quote-grid.component.html',
  styleUrls: ['./quote-grid.component.scss']
})
export class QuoteGridComponent implements OnInit {

  quotes = [
    {
      contractor: 'CS Gas Fitters',
      rating: 5,
      numberOfRatings: 22,
      timePosted: 2,
      estimate: 280
    },
    {
      contractor: 'Trevor Henshaw',
      rating: 4.3,
      numberOfRatings: 44,
      timePosted: 16,
      estimate: 430
    },
    {
      contractor: 'Joe Swanson',
      rating: 3.2,
      numberOfRatings: 11,
      timePosted: 26,
      estimate: 320
    },
    {
      contractor: 'CFS Boilers',
      rating: 2.8,
      numberOfRatings: 55,
      timePosted: 30,
      estimate: 445
    },
    {
      contractor: 'Glinn MacGuire',
      rating: 4,
      numberOfRatings: 66,
      timePosted: 58,
      estimate: 187
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
