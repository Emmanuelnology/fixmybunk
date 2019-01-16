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
    {Name: 'Patty Massy',     Location: 'Kingswood, Bristol',       Date: '23-Aug-2019', Job_Type: 'Broken Lightswitch',    Completed: false, Quoted: false,  Latest_Quote: 90},
    {Name: 'Andrew Smith',    Location: 'Redlands, Bristol',        Date: '14-Oct-2019', Job_Type: 'Rewire Property',       Completed: false, Quoted: false,  Latest_Quote: 4500},
    {Name: 'Mark Johnson',    Location: 'Keynsham, Avon',           Date: '09-Nov-2019', Job_Type: 'Underfloor Heating',    Completed: false, Quoted: false,  Latest_Quote: 2000},
    {Name: 'James Erickton',  Location: 'Long Ahston, Bristol',     Date: '09-Nov-2019', Job_Type: 'External Light',        Completed: false, Quoted: true,   Latest_Quote: 150},
    {Name: 'Jule Norman',     Location: 'Saltford, Avon',           Date: '16-Sep-2019', Job_Type: 'New Light',             Completed: true , Quoted: true,   Latest_Quote: 150},
    {Name: 'Casey Bryan',     Location: 'Frampton Colterell, Avon', Date: '11-Nov-2019', Job_Type: 'Broken Socket',         Completed: true,  Quoted: true,   Latest_Quote: 50},
    {Name: 'Alberta Dennis',  Location: 'Walhey, Bristol',          Date: '09-Jan-2019', Job_Type: 'PAT Testing',           Completed: true,  Quoted: false,  Latest_Quote: 200},
    {Name: 'Glenn Olson',     Location: 'Longwell Green, Bristol',  Date: '01 Sep 2019', Job_Type: 'External Light',        Completed: true , Quoted: true ,  Latest_Quote: 150 },
    {Name: 'Delia Rose',      Location: 'Clifton, Bristol',         Date: '26 Oct 2019', Job_Type: 'Boken Socket',          Completed: true , Quoted: true ,  Latest_Quote: 50 },
    {Name: 'Jon Johnston',    Location: 'Clifton, Bristol',         Date: '22 Mar 2019', Job_Type: 'Storeage Heater',       Completed: true , Quoted: true ,  Latest_Quote: 500 },
    {Name: 'Diana Cooper',    Location: 'Brislington, Bristol',     Date: '18 Nov 2019', Job_Type: 'Broken Storage Heater', Completed: true , Quoted: true ,  Latest_Quote: 250 },
    {Name: 'Jason Powell',    Location: 'Knowle, Bristol',          Date: '01 July 2019', Job_Type: 'Underfloor Heating',    Completed: true , Quoted: true ,  Latest_Quote: 2500 },
    {Name: 'Evelyin Rivera',  Location: 'Bedmister, Bristol',       Date: '22 Jul 2019', Job_Type: 'Rewire Property',       Completed: true , Quoted: true ,   Latest_Quote: 5000 },
    {Name: 'Harry Bryant',    Location: 'Barton Hill, Bristol',     Date: '17-Jul-2019', Job_Type: 'Broken Socket',         Completed: true,  Quoted: true,   Latest_Quote: 60},
  ];
  constructor() { }

  ngOnInit() {
  }
}
