import { Component, OnInit, Input } from '@angular/core';

interface IQuote {
  name: string;
  startRating: number;
  description: string;
}

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  @Input() quote: IQuote;
  @Input() role;

  // public user =  {
  //   role: this.role,
  //   // role: 'landlord'
  // };

  constructor() { }

  ngOnInit() {
    // console.log(this.user.role)
  }

}
