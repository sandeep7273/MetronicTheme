import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  EmployeesRecord =[];
  valueToUpdate = []
  value;
  constructor() { }

  addRecord(EmployeeModel){
    this.EmployeesRecord.push(EmployeeModel);
    this.valueToUpdate = [];
    console.log(this.EmployeesRecord);
  }
  getRecords(){
    return this.EmployeesRecord;
  }
  delete(i){
    this.EmployeesRecord.splice(i,1);
    return this.EmployeesRecord;
  }
  addToUpdate(myValue){
    this.valueToUpdate.push(myValue);
    console.log(this.valueToUpdate);
    
  }
  getToUpdate(){
    this.value = this.valueToUpdate
   
    return this.value;
  }
}
