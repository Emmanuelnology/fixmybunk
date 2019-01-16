import { Component, OnInit } from '@angular/core';
import { IImage, JobDetailService } from './job-detail.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  images: IImage[];
  constructor(private jobDeet: JobDetailService) {
    this.images = this.jobDeet.getImages();
  }
  
  ngOnInit () {
  }
}
