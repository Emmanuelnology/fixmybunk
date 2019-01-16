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
      description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.'
    },
    {
      name: 'Craig',
      description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.'
    },
    {
      name: 'Caitlin',
      description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.'
    },
    {
      name: 'Keiran',
      description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
