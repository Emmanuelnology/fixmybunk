import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

@Component({
  selector: 'app-function-demo',
  templateUrl: './function-demo.component.html',
  styleUrls: ['./function-demo.component.scss']
})
export class FunctionDemoComponent implements OnInit {
  private data$;

  constructor(private functions: AngularFireFunctions) {
    const callable = this.functions.httpsCallable('echo');
    this.data$ = callable({ reference: 1 });
  }

  ngOnInit() {
  }

}
