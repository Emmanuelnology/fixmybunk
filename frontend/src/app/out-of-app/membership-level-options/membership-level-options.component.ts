import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-membership-level-options',
  templateUrl: './membership-level-options.component.html',
  styleUrls: ['./membership-level-options.component.scss']
})
export class MembershipLevelOptionsComponent implements OnInit {

    pageOption;


    selectedOption = [
      {
        title: 'SILVER',
        prices: '15'
      }
    ];

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
    ];

  constructor(
    private router: Router
    ) { console.log(this.router.url);
      if (this.router.url === '/payment') {
        this.pageOption = this.selectedOption;
      } else {
        this.pageOption = this.options;
      }
  }

  ngOnInit() {
  }



}
