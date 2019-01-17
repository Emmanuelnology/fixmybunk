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
      description: 'Lorem ipsum dolor sit amet, duo decore minimum assueverit id, veritus quaerendum his in. In fastidii aliquando complectitur eos, an vim unum dicam. Sed an nisl numquam iudicabit, eam no illum vivendo mediocritatem.'
    },
    {
      name: 'CRAIG',
      description: 'Lorem ipsum dolor sit amet, duo decore minimum assueverit id, veritus quaerendum his in. In fastidii aliquando complectitur eos, an vim unum dicam. Sed an nisl numquam iudicabit, eam no illum vivendo mediocritatem.'
    },
    {
      name: 'CAITLIN',
      description: 'Lorem ipsum dolor sit amet, duo decore minimum assueverit id, veritus quaerendum his in. In fastidii aliquando complectitur eos, an vim unum dicam. Sed an nisl numquam iudicabit, eam no illum vivendo mediocritatem.'
    },
    {
      name: 'KIERAN',
      description: 'Lorem ipsum dolor sit amet, duo decore minimum assueverit id, veritus quaerendum his in. In fastidii aliquando complectitur eos, an vim unum dicam. Sed an nisl numquam iudicabit, eam no illum vivendo mediocritatem.'
    },
    {
      name: 'SATYAM',
      description: 'Lorem ipsum dolor sit amet, duo decore minimum assueverit id, veritus quaerendum his in. In fastidii aliquando complectitur eos, an vim unum dicam. Sed an nisl numquam iudicabit, eam no illum vivendo mediocritatem.'
    },
    {
      name: 'SHEA',
      description: 'Lorem ipsum dolor sit amet, duo decore minimum assueverit id, veritus quaerendum his in. In fastidii aliquando complectitur eos, an vim unum dicam. Sed an nisl numquam iudicabit, eam no illum vivendo mediocritatem.'
    },
    {
      name: 'JOSH',
      description: 'Lorem ipsum dolor sit amet, duo decore minimum assueverit id, veritus quaerendum his in. In fastidii aliquando complectitur eos, an vim unum dicam. Sed an nisl numquam iudicabit, eam no illum vivendo mediocritatem.'
    },
    {
      name: 'GEORGE',
      description: 'Lorem ipsum dolor sit amet, duo decore minimum assueverit id, veritus quaerendum his in. In fastidii aliquando complectitur eos, an vim unum dicam. Sed an nisl numquam iudicabit, eam no illum vivendo mediocritatem.'
    },
  
  ];
  constructor() { }

  ngOnInit() {
  }

}
