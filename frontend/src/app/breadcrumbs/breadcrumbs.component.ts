import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

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
    {label: 'Home', url: '/'}
  ];
  path;
  url;
  title;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.path = this.activatedRoute.pathFromRoot;
    this.url = this.activatedRoute.pathFromRoot[0].outlet;
    this.title = this.activatedRoute.pathFromRoot[1].routeConfig.data.title;
    const path = this.activatedRoute.pathFromRoot;
    for (let i = 1; i  < path.length; i++) {
      const currentUrl = this.path[i].outlet;
      const title = this.path[i].routeConfig.data.title;
      this.breadcrumbs.push({label: title, url: currentUrl});
    }
    this.breadcrumbs[path.length - 1].last = true;
  }

}
