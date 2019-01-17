import { Component, OnInit } from '@angular/core';
import { IImage, JobDetailService } from '../job-detail/job-detail.service';

@Component({
  selector: 'app-job-image',
  templateUrl: './job-image.component.html',
  styleUrls: ['./job-image.component.scss']
})
export class JobImageComponent implements OnInit {
  images: IImage[];
  constructor(private jobDeet: JobDetailService) {
    this.images = this.jobDeet.getImages();
  }
  ngOnInit () {
  }
}
