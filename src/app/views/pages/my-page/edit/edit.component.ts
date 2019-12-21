import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../../user.model';
import { DataService } from '../../../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
//   styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  
  recordEdit :Employee = new Employee();
  constructor(private service: DataService, private _router: Router) { }

  ngOnInit() {
    this.recordEdit.name = this.service.valueToUpdate[0].name;
    this.recordEdit.contact = this.service.valueToUpdate[0].contact;
    this.recordEdit.email = this.service.valueToUpdate[0].email;
    this.recordEdit.position = this.service.valueToUpdate[0].position;
    this.recordEdit.address = this.service.valueToUpdate[0].address;
    console.log(this.recordEdit);
  }

  updateEmployee() {
    this.service.addRecord(this.recordEdit)
    this.recordEdit = new Employee();
    this._router.navigate(['/mypage/pages'])
  }
}
