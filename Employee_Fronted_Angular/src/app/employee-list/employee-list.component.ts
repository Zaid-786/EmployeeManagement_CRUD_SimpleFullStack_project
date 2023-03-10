import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit 
{
  employees: Employee[];

  constructor(private employeeService:EmployeeService,private router:Router) {}

  ngOnInit(): void {
    this.getEmployees();
  }


  
// get all employees from backend 
private getEmployees()
{
  this.employeeService.getEmployeeList().subscribe(date =>{
    this.employees=date;
  });
}



updateEmployee(id:number){

  this.router.navigate(['update-employees',id])
}



deleteEmployee(id:number){
  this.employeeService.deleteEmployee(id).subscribe(data=>{
     console.log(data);
    this.getEmployees();
  });
}



employeeDetails(id:number){

  this.router.navigate(['details-employees',id])

}


}
