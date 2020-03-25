import { Injectable } from '@angular/core';

import { Employee } from './employee.model';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees = Employee;

  baseurl = 'http://localhost:3000';
serviceurlEmp = '/employees';
  constructor(private http: HttpClient) { }
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    position: new FormControl('', Validators.required),
    office: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),


  });

  initializeformGroup() {
    this.form.setValue({
      $key: new FormControl(null),
      name: '',
      email: '',
      mobile: '',
      position: '',
      office: '',
      salary: '',
    });

  }

postemployee(emp:Employee){
return this.http.post(this.baseurl + this.serviceurlEmp, emp);

}
getemployee(){
  return this.http.get(this.baseurl + this.serviceurlEmp);
}

}
