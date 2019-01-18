import { Component, ViewChild, Input } from '@angular/core';
import { ContractorJobsListComponent } from '../contractor-jobs-list/contractor-jobs-list.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

    // showModal = false;

  // ngOnChanges() {
  //   this.showModal ? this.open() : this.close();
  // }


  // open() {
  //   this.showModal = true;
  // }

  // ngOnDestroy() {
  //   this.close();
  // }

  // close() {
  //   document.body.classList.remove('blur');
  //   this.showModal = false;
  // }


  // @Output() someEvent = new EventEmitter<string>();

  // callParent(){
  //   this.someEvent.next('somePhone');
  // }

  // closeModal(){
  //   document.getElementById('modalSelector').classList.add('hidden');


  // }



}
