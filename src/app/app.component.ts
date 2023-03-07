import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'emp_ms';
  search : String ="";

  addEmployee(){
    console.log('add employee is clicked');
  }
}
