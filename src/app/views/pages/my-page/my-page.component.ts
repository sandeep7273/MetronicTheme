import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';
import { Employee } from '../../../user.model';

@Component({
  selector: 'kt-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
export class MyPageComponent implements OnInit, OnChanges  {
  // element;
  // dataSource = this.element;
  records;
  dataSource;
  displayedColumns = ['name', 'contact', 'email', 'position', 'address', 'action'];
 

  constructor(
    private service: DataService, private _router: Router) { }

  ngOnInit() {

    this.records = this.service.getRecords();
    console.log(this.records);
    this.dataSource = this.records;
    console.log(this.dataSource);
  }
  
    ngOnChanges() {
      this.records = this.service.getRecords();
      console.log(this.records);
      this.dataSource = this.records;
      console.log(this.dataSource);
    }
  model2: Employee = new Employee(); 

  deleteEmployee(i) {
    this.service.delete(i)
    this.records = this.service.getRecords();
    console.log(this.records);
    this.dataSource = this.records;
    console.log(this.dataSource);
    console.log(i);
  }

  myValue;

  editEmployee(editEmployeeInfo) {
    this.model2.name = this.records[editEmployeeInfo].name;
    this.model2.contact = this.records[editEmployeeInfo].contact;
    this.model2.email = this.records[editEmployeeInfo].email;
    this.model2.position = this.records[editEmployeeInfo].position;
    this.model2.address = this.records[editEmployeeInfo].address;
    this.myValue = editEmployeeInfo;
    console.log(this.model2);
    this.service.addToUpdate(this.model2);
    this.service.delete(editEmployeeInfo);
    this._router.navigate(['/mypage/edit'])


  }

 

}