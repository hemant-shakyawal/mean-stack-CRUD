import { Injectable } from '@angular/core';

import { Employee } from './employee.model';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient ,HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees = Employee;

  baseurl = 'http://localhost:3000';
serviceurlEmp = '/employees';

headers = new HttpHeaders().set('Content-Type', 'application/json');
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

updateemployee(data): Observable<any> {
  let url = `${this.baseurl + this.serviceurlEmp}/`;
  return this.http.put(url, data, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  );
}
populateForm(employee) {
  this.form.patchValue((employee));
}

// Error handling
errorMgmt(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

}
