import { Component, OnInit, Input } from '@angular/core';
import { CompanySizeComponent } from '../company-size/company-size.component';

@Component({
  selector: 'app-modal-new',
  templateUrl: './modal-new.component.html',
  styleUrls: ['./modal-new.component.scss']
})
export class ModalNewComponent implements OnInit {
  @Input() size: string;
  sizey = this.size;
  big = false;
  small = false;
  constructor() {
    if (this.sizey === 'big') {
      this.big = true;
    } else {
      this.small = true;
      console.log(this.sizey);
    }
  }

  ngOnInit() {
  }



}
