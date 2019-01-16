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

  constructor() { }

  ngOnInit() {
  }

}
