import { Component, OnInit, Input } from '@angular/core';
import { QuoteSubmittedModalComponent } from '../quote-submitted-modal/quote-submitted-modal.component';

@Component({
  selector: 'app-quote-timeline',
  templateUrl: './quote-timeline.component.html',
  styleUrls: ['./quote-timeline.component.scss']
})
export class QuoteTimelineComponent implements OnInit {
  @Input() role;

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
    },
    {
      contractor: 'Harry MacGuire',
      rating: 4,
      numberOfRatings: 66,
      timePosted: 122,
      estimate: 555
    },
    {
      contractor: 'Barry MacGuire',
      rating: 4,
      numberOfRatings: 66,
      timePosted: 134,
      estimate: 666
    }
  ];

  mostRecentQuotes = this.quotes.slice(0, 5);

  constructor() {
  }

  ngOnInit() {
  }

}
