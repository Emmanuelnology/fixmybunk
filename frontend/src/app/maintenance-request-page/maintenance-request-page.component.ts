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

  public quoteView = 'timeline';

  constructor() { }

  setQuoteView(view) {
    this.quoteView = view;
    console.log(view);
    console.log(this.quoteView);
  }

  ngOnInit() {
  }

}
