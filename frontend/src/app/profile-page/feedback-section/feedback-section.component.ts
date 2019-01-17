import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-section',
  templateUrl: './feedback-section.component.html',
  styleUrls: ['./feedback-section.component.scss']
})
export class FeedbackSectionComponent implements OnInit {

  title = 'What The Landlords Say';

  reviews = [
    {
      name: 'GEORGINA',
      description: 'Lorem ipsum dolor sit amet, duo decore minimum assueverit id, veritus quaerendum his in.'
    },
    {
      name: 'CRAIG',
      description: 'Lorem ipsum dolor sit amet, duo decore minimum assueverit id, veritus quaerendum his in.'
    },
    {
      name: 'CAITLIN',
      description: 'Lorem ipsum dolor sit amet, duo decore minimum assueverit id, veritus quaerendum his in.'
    },
    {
      name: 'KIERAN',
      description: 'Lorem ipsum dolor sit amet, duo decore minimum assueverit id, veritus quaerendum his in.'
    },
    {
      name: 'SATYAM',
      description: 'Lorem ipsum dolor sit amet, duo decore minimum assueverit id, veritus quaerendum his in.'
    },
    {
      name: 'SHEA',
      description: 'Lorem ipsum dolor sit amet, duo decore minimum assueverit id, veritus quaerendum his in.'
    },
    {
      name: 'JOSH',
      description: 'Lorem ipsum dolor sit amet, duo decore minimum assueverit id, veritus quaerendum his in.'
    },
    {
      name: 'GEORGE',
      description: 'Lorem ipsum dolor sit amet, duo decore minimum assueverit id, veritus quaerendum his in.'
    },

  ];
  constructor() { }

  ngOnInit() {
  }

}
