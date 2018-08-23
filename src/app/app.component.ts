import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



class GSM {
  public mobileNumber: number;
  
  public dispStuff():string {
    let num:number = 1015151;
    console.log(num) ;
    return num.toString();
  }

}
export class AppComponent extends GSM, implements OnInit {
//

 gsm = new GSM();
  test = this.gsm.dispStuff();
mobile = this.gsm.mobileNumber;
  name = "Pesho";
  title = 'demo';
  img = "http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png";
  grade = 5;
  school = "High School of Mathematics";
  teacher = "Toshko knows everything";

testMethod(): void{
  this.dispStuffa();
  this.gsm.dispStuff();
}



 public dispStuffa():void {
  let num:number = 10;
  console.log(num) ;
}

ngOnInit(){

}

myFunc(num){
  console.log("function called ASasAS " + num);
}

values = '';

onKey(event: any) { // without type info

  this.values += event.target.value + ' | ';
}
heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
addHero(newHero: string) {
  if (newHero) {
    this.heroes.push(newHero);
  }

  console.log(newHero)
}
}





 

// ctrl + k 
// ctrl + u
// "name": "Pesho",
//   "photo": "http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png",
//   "grade": 5,
//   "school": "High School of Mathematics",
//   "teacher": "Gichka Pesheva",
