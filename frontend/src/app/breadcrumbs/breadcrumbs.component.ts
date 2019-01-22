import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface IBreadcrumb {
  label: string;
  url?: string;
  last?: boolean;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbs: IBreadcrumb[] = [
    {label: 'Home', url: '/'},
    {label: 'Previous Page', url: '/function-demo'}
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const currentUrl = this.activatedRoute.outlet;
    const title = this.activatedRoute.routeConfig.data.title;
    this.breadcrumbs.push({label: title, url: currentUrl, last: true});
  }

}
