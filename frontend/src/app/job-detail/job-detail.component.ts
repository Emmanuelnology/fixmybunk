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
  public isQuoted = true;
  public isAccepted = true;
  constructor() {
  }

  // public accept () {
  //   if (this.isQuoted) {
  //     const quote: IQuote = {
  //       text: 'The LandLord has Accepted Your Quote',
  //       price: '£280',
  //     };
  //   } else {
  //     const quote: IQuote = {
  //     text: 'You Quoted',
  //     price: '£280',
  //     };
  //   }
  // }
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

  // public getUser () {
  //   const isLandlord = true;
  //   // const isLandlord = false;
  //   return isLandlord;
  // }

  ngOnInit () {
    // console.log(this.role)
  }
}
