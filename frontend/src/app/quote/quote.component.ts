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

  constructor() { }

  ngOnInit() {
  }

}
