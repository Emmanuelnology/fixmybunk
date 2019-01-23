import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-request-page',
  templateUrl: './maintenance-request-page.component.html',
  styleUrls: ['./maintenance-request-page.component.scss']
})
export class MaintenanceRequestPageComponent implements OnInit {

  public user = {
    role: 'landlord'
  };

  public showQuotes = true;
  public quoteSent = true;
  public quoteAccepted = false;

  public outsourcingSent = true;
  public contractorWorkCompleted = false;
  public quoteView = 'timeline';

  constructor() { }

  setQuoteView(view) {
    this.quoteView = view;
  }

  ngOnInit() {
  }

}
