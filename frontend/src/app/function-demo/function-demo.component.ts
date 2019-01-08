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
    callable({ name: 'A name' }).toPromise()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => { console.error(error); });
  }

  ngOnInit() {
  }

}
