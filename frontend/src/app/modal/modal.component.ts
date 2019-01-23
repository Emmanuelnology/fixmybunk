import { Component, ViewChild, Input } from '@angular/core';
import { ContractorJobsListComponent } from '../contractor-jobs-list/contractor-jobs-list.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
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
