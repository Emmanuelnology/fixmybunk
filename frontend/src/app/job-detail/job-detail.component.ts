import { Component, OnInit, Input } from '@angular/core';

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
  @Input() role;
  @Input() contractorQuoteState;

  constructor() {
  }

  public Quotes = [
    {
      text: 'The LandLord has Accepted Your Quote',
      price: '£280',
    },
    {
      text: 'You Quoted',
      price: '£280',
    },
  ];

  ngOnInit () {
  }
}
