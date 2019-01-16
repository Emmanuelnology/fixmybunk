import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface IImage {
  id: number;
  url: string;
}

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  private images: [IImage];
  constructor(private router: Router) {
    const images = [
      {
        id: 1,
        url: 'http://www.touchwoodconstructions.com.au/upload/agency_logo/100720033144__handyman_7.jpg'
      },
      {
        id: 2,
        url: 'https://i.imgur.com/2WGi01r.jpg'
        },
      {
        id: 3,
        url: 'https://media-cdn.tripadvisor.com/media/photo-s/02/19/f3/f2/bedroom-lock.jpg'
      },
      {
        id: 4,
        url: 'http://www.policestateusa.com/wp-content/uploads/2014/06/Kari-Edwards-damage-8.jpg'
        },
    ];
  }

  ngOnInit() {
  }

}
