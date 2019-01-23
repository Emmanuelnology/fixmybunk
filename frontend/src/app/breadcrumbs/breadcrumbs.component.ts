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
  path;
  url;
  title;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.path = this.activatedRoute.root;
    this.url = this.activatedRoute.pathFromRoot[1].routeConfig.path;
    // this.title = this.activatedRoute.pathFromRoot[0].snapshot.data.title;
    const path = this.activatedRoute.pathFromRoot;
    for (let i = 0; i  < path.length; i++) {
      const currentURL = path[i].routeConfig ? path[i].routeConfig.path : '';
      // const currentUrl = path[i].snapshot.url;
      const loopTitle = path[i].routeConfig ? path[i].routeConfig.data.title : 'Home';
      if (!(i !== 0 && currentURL === '')) {
        this.breadcrumbs.push({label: loopTitle, url: currentURL});
      }
    }
    this.breadcrumbs[this.breadcrumbs.length - 1].last = true;
      // const title = this.activatedRoute.routeConfig.data.title;
      // const currentUrl = this.router.url;
      // this.breadcrumbs.push({label: title, url: currentUrl, last: true});
  }

  // ngOnInit() {
  //   this.breadcrumbs = this.buildBreadcrumbs(this.activatedRoute.root, '', []);
  // }

  // buildBreadcrumbs(route: ActivatedRoute, url: string, breadcrumbs: IBreadcrumb[]) {
  //   const label = route.routeConfig ? route.routeConfig.data.title : 'Home';
  //   const path = route.routeConfig ? route.routeConfig.path : '';
  //   const nextUrl = `${url}${path}`;
  //   const breadcrumb = {label: label, url: nextUrl, last: false};
  //   if (nextUrl === url) {
  //     breadcrumb.last = true;
  //   }
  //   const newBreadcrumbs = [...breadcrumbs, breadcrumb];
  //   if (nextUrl !== url) {
  //     return this.buildBreadcrumbs(route, nextUrl, newBreadcrumbs);
  //   }
  //   return newBreadcrumbs;
  // }

}
