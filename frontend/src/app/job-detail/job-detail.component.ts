import { Component, OnInit } from '@angular/core';

export interface IQuote {
  text: string;
  price: string;
}

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  public isQuoteAccepted = true;
  constructor() {
  }

  public accept () {
    if (this.isQuoteAccepted) {
      const quote: IQuote = {
        text: 'The LandLord has Accepted Your Quote',
        price: '£280',
      };
    } else {
      const quote: IQuote = {
      text: 'You Quoted',
      price: '£280',
    };
  }
  }
  ngOnInit () {
  }
}
