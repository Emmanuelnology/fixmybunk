import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-section',
  templateUrl: './feedback-section.component.html',
  styleUrls: ['./feedback-section.component.scss']
})
export class FeedbackSectionComponent implements OnInit {
  reviews = [
    {
      name: 'Georgina',
      description: 'They fitted my boiler perfectly, she was on time and finished the job quickly with no mess.I would use her again.'
    },
    {
      name: 'Craig',
      description: 'He came all the way to Canada to fix my boiler in my chalet. '
    },
    {
      name: 'Caitlin'
    },
    {
      name: 'Keiran'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
