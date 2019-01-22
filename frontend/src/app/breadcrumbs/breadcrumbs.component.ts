import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

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

  breadcrumbs: IBreadcrumb[] = [
    {label: 'Home', url: '/'},
    {label: 'Another Page', url: '/'}
  ];
  path;
  url;
  title;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.path = this.activatedRoute.pathFromRoot;
    // this.url = this.activatedRoute.pathFromRoot[1].snapshot.url;
    // // this.title = this.activatedRoute.pathFromRoot[1].snapshot.data.title;
    // const path = this.activatedRoute.pathFromRoot;
    // for (let i = 0; i  < path.length; i++) {
    //   const currentUrl = '/';
    //   // const currentUrl = path[i].snapshot.url;
    //   const title = 'Hi';
    // //   const title = this.path[i].routeConfig.data.title;
    //   this.breadcrumbs.push({label: title, url: currentUrl});
    // }
    // this.breadcrumbs[path.length - 1].last = true;
      // const title = this.activatedRoute.routeConfig.data.title;
      // const currentUrl = this.activatedRoute.outlet;
      // this.breadcrumbs.push({label: title, url: currentUrl, last: true});
  }

}
