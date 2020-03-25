import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Employee } from 'src/app/shared/employee.model';
import { MatSort } from '@angular/material/sort';
import { EmployeeComponent } from '../employee/employee.component';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public displayedColumns = ['name', 'email', 'mobile', 'position', 'office', 'salary', 'update', 'delete'
  ];
  public dataSource = new MatTableDataSource<Employee>();
  @ViewChild(MatSort) sort: MatSort;
  constructor(public EmployeeService: EmployeeService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.showdata();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  showdata() {
    this.EmployeeService.getemployee().subscribe(
      res => {
        console.log("respo", res)
        this.dataSource.data = res as Employee[];
      });
  }
  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(EmployeeComponent,dialogConfig);

  }

}
