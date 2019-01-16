import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  // private ratingVariable = 4;
  // private noOfStars = 5;

  constructor() { }

  ngOnInit() {
  }

  // ratingCalc(ratingVariable, noOfStars) {
  //   console.log(ratingVariable/noOfStars);
  //   const rating = ((ratingVariable/noOfStars) * 10)
  // }

  starList: boolean[] = [true,true,true,true,true];
  rating:number;  

  setStar(data:any){
        this.rating = data+1;                               
        for(var i=0; i<=4; i++){  
          if(i<=data){  
            this.starList[i]=false;  
          }  
          else{  
            this.starList[i]=true;  
          }  
       }  
   }  

}
