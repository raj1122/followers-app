import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.styl']
})
export class CourseComponent implements OnInit {

  title = "Course";

  courses=["first","second","third"];
  constructor() { }
  email = "me@yahoo.com";
  isActive = true;
  ngOnInit() {
  }

  // onSave($event)
  // {
  //   console.log('button clicked' , $event);
  // }
  onKeyUp()
  {
    console.log(this.email);
  }

}
