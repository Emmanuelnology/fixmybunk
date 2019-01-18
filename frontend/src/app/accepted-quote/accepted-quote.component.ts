import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accepted-quote',
  templateUrl: './accepted-quote.component.html',
  styleUrls: ['./accepted-quote.component.scss']
})
export class AcceptedQuoteComponent implements OnInit {
  @Input() isActive = false;
  constructor() { }

  ngOnInit() {
  }

}
