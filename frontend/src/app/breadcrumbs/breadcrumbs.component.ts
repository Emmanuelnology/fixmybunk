import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const path = this.activatedRoute.pathFromRoot;
    let currentUrl = '';
    for (let i = 0; i  < path.length; i++) {
      currentUrl = path[i].routeConfig ? currentUrl + '/' + path[i].routeConfig.path : currentUrl + '/';
      const loopTitle = path[i].routeConfig ? path[i].routeConfig.data.title : 'Home';
      if (loopTitle !== '') {
        this.breadcrumbs.push({label: loopTitle, url: currentUrl});
      }
    }
    this.breadcrumbs[this.breadcrumbs.length - 1].last = true;
  }
}
