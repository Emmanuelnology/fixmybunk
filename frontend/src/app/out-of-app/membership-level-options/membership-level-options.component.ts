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
        prices: '15',
        isHidden: true
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
    ) {
      // console.log('constructor');
      if (this.router.url === '/contractor/payment') {
        this.pageOption = this.selectedOption;
        return;
      } else {
        this.pageOption = this.options;
      }
    // console.log(this.pageOption[0]);
  }

  updatePaymentOption(option) {
      console.log('update clicked' + option.title);
      return this.selectedOption = [{
        title: option.title,
        prices: option.prices,
        isHidden: false
      }];

  }

  ngOnInit() {



  }



}
