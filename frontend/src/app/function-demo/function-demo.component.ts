import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-function-demo',
  templateUrl: './function-demo.component.html',
  styleUrls: ['./function-demo.component.scss']
})
export class FunctionDemoComponent implements OnInit {
  private data$;

  constructor(private fns: AngularFireFunctions) {
    const callable = fns.httpsCallable('echo');
    this.data$ = callable({ reference: 1 });
  }

  ngOnInit() {
  }

}
