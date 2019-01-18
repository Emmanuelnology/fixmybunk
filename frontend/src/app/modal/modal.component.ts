import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnDestroy, OnChanges {

  showModal = false;

  ngOnChanges() {
    this.showModal ? this.open() : this.close();
  }


  open() {
    console.log('Open');
    document.body.classList.add('blur');
    this.showModal = true;
  }

  ngOnDestroy() {
    this.close();
  }

  close() {
    document.body.classList.remove('blur');
    this.showModal = false;
  }



}
