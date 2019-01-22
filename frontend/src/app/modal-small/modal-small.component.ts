import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-small',
  templateUrl: './modal-small.component.html',
  styleUrls: ['./modal-small.component.scss']
})
export class ModalSmallComponent {
  showModal = false;
  open() {
    const list = document.getElementsByClassName('blurSelector');
    for (let i = 0; i < list.length; i++) {
      list[i].classList.add('blur');
    }
    this.showModal = true;
  }

  close() {
    const list = document.getElementsByClassName('blurSelector');
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove('blur');
    }
    this.showModal = false;
 }

 cancel() {
   this.close();
 }

 save() {
   // save
   this.close();
 }
}
