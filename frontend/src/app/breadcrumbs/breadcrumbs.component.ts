import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

interface IBreadcrumb {
  label: string;
  url: string;
  last?: boolean;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbs: IBreadcrumb[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const path = this.activatedRoute.pathFromRoot;
    for (let i = 0; i  < path.length; i++) {
      const currentURL = path[i].routeConfig ? path[i].routeConfig.path : '';
      const loopTitle = path[i].routeConfig ? path[i].routeConfig.data.title : 'Home';
      if (!(i !== 0 && currentURL === '')) {
        this.breadcrumbs.push({label: loopTitle, url: currentURL});
      }
    }
    this.breadcrumbs[this.breadcrumbs.length - 1].last = true;
  }
}
