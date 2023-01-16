import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

employee:Employee=new Employee();

  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }



saveEmployee(){
  this.employeeService.createEmployee(this.employee).subscribe(date =>{
    console.log(date);
    this.goToEmployeeList();

  },
  error=>console.error(error)); 
}


goToEmployeeList(){
  this.router.navigate(['/employees']);
}



onSubmit()
{
   console.log(this.employee);
   this.saveEmployee();
}




}
