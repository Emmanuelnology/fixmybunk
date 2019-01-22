import { Component, OnInit } from '@angular/core';

interface IBreadcrumb {
  label: string;
  last?: boolean;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbs: IBreadcrumb[] = [
    {label: 'Home'},
    {label: 'Previous Page'},
    {label: 'Current Page', last: true}
  ];

  constructor() { }

  ngOnInit() {
  }

}
