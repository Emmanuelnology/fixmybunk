import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.scss']
})
export class ContractorComponent implements OnInit {

  name = 'CS Gas Fitting';
  description = 'Gas Fitter in Bristol and Bath';
  phone = '01179 901 281';
  email = 'hello@gsgasfitting.com';
  website = 'www.gsgasfitting.com';
  numberOfStaff = 3;
  descriptionBeingEdited = false;
  phoneBeingEdited = false;
  emailWebsiteBeingEdited = false;
  numberOfStaffBeingEdited = false;
  detailedDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at leo et arcu dictum venenatis nec eu orci.\
                        Nam vel tortor at libero volutpat eleifend. Duis in dolor sed felis imperdiet efficitur quis vel justo.\
                        Aenean iaculis varius eros quis rutrum. Donec tempus mauris vel tristique consectetur.\
                        Cras est felis, consequat id dui nec, faucibus finibus magna. Nam venenatis vitae purus a fermentum.';

constructor () {}

  ngOnInit() { }

  swapDescription = () => this.descriptionBeingEdited = !this.descriptionBeingEdited;

  swapPhone = () => this.phoneBeingEdited = !this.phoneBeingEdited;

  swapEmailWebsite = () => this.emailWebsiteBeingEdited = !this.emailWebsiteBeingEdited;

  swapNumberOfStaff = () => this.numberOfStaffBeingEdited = !this.numberOfStaffBeingEdited;

}
