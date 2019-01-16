import { Component, OnInit } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-contractor-jobs-list',
  templateUrl: './contractor-jobs-list.component.html',
  styleUrls: ['./contractor-jobs-list.component.scss']
})
export class ContractorJobsListComponent implements OnInit {


  jobsList = [
    // WHEN CREATING DUMMY DATA HAVE 4 COMBINATIONS FOR 'Completed' and 'Quoted' --> T/F T/T, F/T, F/F
    {Name: 'Patty Massy', Location: 'Kingswood', Date: '23-Aug-2019', Job_Type: 'Broken Lightswitch', Completed: false, Quoted: false, Latest_Quote: 90}
  ];
  constructor() { }

  ngOnInit() {
  }
}
