import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = "Pesho";
  title = 'demo';
  img = "http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png";
  grade = 5;
  school = "High School of Mathematics";
  teacher = "Toshko knows everything"

}

// ctrl + k 
// ctrl + u
// "name": "Pesho",
//   "photo": "http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png",
//   "grade": 5,
//   "school": "High School of Mathematics",
//   "teacher": "Gichka Pesheva",
