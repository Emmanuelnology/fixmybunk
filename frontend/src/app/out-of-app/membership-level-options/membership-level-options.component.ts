import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership-level-options',
  templateUrl: './membership-level-options.component.html',
  styleUrls: ['./membership-level-options.component.scss']
})
export class MembershipLevelOptionsComponent implements OnInit {

    options = [
      {
        title: 'BASIC',
        prices: '5'
      },
      {
        title: 'BRONZE',
        prices: '10'
      },
      {
        title: 'SILVER',
        prices: '15'
      },
      {
        title: 'GOLD',
        prices: '20'
      }
    ]

  constructor() {

  }

  ngOnInit() {
  }



}
