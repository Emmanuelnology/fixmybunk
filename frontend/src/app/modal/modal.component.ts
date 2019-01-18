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
    let list = document.getElementsByClassName('blurSelector');
    for(let i =0; i < list.length; i++){
      list[i].classList.add('blur');
    }
    this.showModal=true;
  }

  close() {
    let list = document.getElementsByClassName('blurSelector');
    for(let i =0; i < list.length; i++){
      list[i].classList.remove('blur');
    }
    this.showModal=false;
 }

 cancel() {
   this.close();
 }

 save() {
   //save
   this.close();
 }
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
