import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { MatDialogRef } from '@angular/material/dialog';
//import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeeComponent implements OnInit {
   //empForm: void FormGroup ;
  constructor( public EmployeeService: EmployeeService, public dialogRef:MatDialogRef<EmployeeComponent> ) {
    //this.empForm = this.createFormGroup()
  }




  ngOnInit(): void {
this.onClear();

  }
  // createFormGroup(){
  //   return new FormGroup({
  //     $key: new FormControl(null),
  //     name: new FormControl('', Validators.required),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
  //     position: new FormControl('', Validators.required),
  //     office: new FormControl('', Validators.required),
  //     salary: new FormControl('', Validators.required),


  //   });

 // }

 onSubmit(){
   if(this.EmployeeService.form.valid){


    this.EmployeeService.postemployee(this.EmployeeService.form.value).subscribe();
     //this.EmployeeService.form.reset();
    // this.EmployeeService.initializeformGroup();
    this.onClose();
   }

 }
  onClear() {
    this.EmployeeService.form.reset();
    this.EmployeeService.initializeformGroup();
  }
  onClose(){
    this.EmployeeService.form.reset();
    this.EmployeeService.initializeformGroup();
    this.dialogRef.close();

  }
}
