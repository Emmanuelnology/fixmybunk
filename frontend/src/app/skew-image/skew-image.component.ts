import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skew-image',
  templateUrl: './skew-image.component.html',
  styleUrls: ['./skew-image.component.scss']
})
export class SkewImageComponent implements OnInit {
  @Input() src: string;
  constructor() { }

  ngOnInit() {
  }

}
