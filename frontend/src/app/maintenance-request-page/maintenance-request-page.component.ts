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

  // landlordQuoteState relates to landlord page view....states are 'none', 'received' & 'accepted'

  public outsourcingSent = false;
  public contractorWorkCompleted = false;
  public landlordQuoteState = 'received';
  public quoteView = 'timeline';

  // contractorQuoteState relates to contractor view... states are 'none', 'sent' and 'accepted'

  public contractorQuoteState = 'none';

  constructor() { }

  setQuoteView(view) {
    this.quoteView = view;
  }

  ngOnInit() {
    this.user.role = this.role;
  }

}
