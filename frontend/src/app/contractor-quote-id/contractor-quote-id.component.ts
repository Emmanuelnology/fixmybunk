import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contractor-quote-id',
  templateUrl: './contractor-quote-id.component.html',
  styleUrls: ['./contractor-quote-id.component.scss']
})
export class ContractorQuoteIdComponent implements OnInit {

  constructor() { }

  public showQuotes = true;
  public quoteSent = true;
  public quoteAccepted = false;

  public outsourcingSent = true;
  public contractorWorkCompleted = false;
  public quoteView = 'timeline';

  ngOnInit() {
  }

}
