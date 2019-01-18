import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.scss']
})
export class ContractorComponent implements OnInit {
  @ViewChild(ModalComponent) modal;

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

  constructor() { }

  ngOnInit() {
  }

  swapDescription = () => this.descriptionBeingEdited = !this.descriptionBeingEdited;

  swapPhone = () => this.phoneBeingEdited = !this.phoneBeingEdited;

  swapEmailWebsite = () => this.emailWebsiteBeingEdited = !this.emailWebsiteBeingEdited;

  swapNumberOfStaff = () => this.numberOfStaffBeingEdited = !this.numberOfStaffBeingEdited;

  openModal() {
    this.modal.open();
  }

}
