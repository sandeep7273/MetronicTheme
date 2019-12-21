import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { DataService } from '../../../../../data.service';
import { Router } from '@angular/router';
import { Employee } from '../../../../../user.model';




/** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
// 	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
// 		const isSubmitted = form && form.submitted;
// 		return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
// 	}
// }

@Component({
	selector: 'kt-input',
	templateUrl: './input.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [`
	.example-form {
		min-width: 150px;
		max-width: 500px;
		width: 100%;
	  }
	  .example-full-width {
		width: 100%;
	  }
	  .example-form-field {
		width: 200px;
	  }
	`]
})
export class InputComponent implements OnInit {


  EmployeeModel : Employee = new Employee();
	constructor( private service: DataService, private router: Router) { }


	ngOnInit() {

	 }
  addEmployee() {
    // this.formService.addUser(this.UserModel);
    this.service.addRecord(this.EmployeeModel)
    this.EmployeeModel = new Employee();
    this.router.navigate(['/mypage/pages'])
    
  }
}
