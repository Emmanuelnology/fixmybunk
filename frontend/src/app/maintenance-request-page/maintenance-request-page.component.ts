import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-maintenance-request-page',
  templateUrl: './maintenance-request-page.component.html',
  styleUrls: ['./maintenance-request-page.component.scss']
})
export class MaintenanceRequestPageComponent implements OnInit {
  @Input() role: string;

  public user = {
    role: ''
  };

  public quoteState = "none";

  public showQuotes = false;
  public quoteSent = true;
  public quoteAccepted = false;

  public outsourcingSent = false;
  public contractorWorkCompleted = false;
  public quoteView = 'timeline';

  constructor() { }

  setQuoteView(view) {
    this.quoteView = view;
  }

  ngOnInit() {
    this.user.role = this.role;
  }

}
