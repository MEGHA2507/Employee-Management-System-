import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {

  editEmployee(){
    console.log('edit employee clicked');
  }

  deleteEmployee(){
    console.log('delete employee clicked');
  }
}
