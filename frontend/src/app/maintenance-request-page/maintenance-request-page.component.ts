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
  public quoteView = 'timeline';
  public quoteAccepted = false;

  constructor() { }

  showHideQuotes() {
    this.showQuotes != this.showQuotes;
  }

  setQuoteView(view) {
    this.quoteView = view;
    console.log(view);
    console.log(this.quoteView);
  }

  ngOnInit() {
  }

}
