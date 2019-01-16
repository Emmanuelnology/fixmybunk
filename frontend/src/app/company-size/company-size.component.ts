import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-size',
  templateUrl: './company-size.component.html',
  styleUrls: ['./company-size.component.scss']
})
export class CompanySizeComponent implements OnInit {

  constructor() { }

companySize = [
  { title: 'single tradesman', subtitle: 'just you' },
  { title: 'small company', subtitle: '2-10 people'},
  { title: 'big company', subtitle: 'more than 10 people'}
];

  ngOnInit() {
  }

}
