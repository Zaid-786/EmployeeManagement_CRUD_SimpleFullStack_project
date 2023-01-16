import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl="http://localhost:8081/api/v1/employee";

  constructor(private httpClient:HttpClient) {  }

  // to get all employees date from server
  getEmployeeList():Observable<Employee[]>{

    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);

  }


// to create employee object all send to server
createEmployee(employee:Employee):Observable<Object>{
   return this.httpClient.post(`${this.baseUrl}`,employee);
}


//get employee object by id
getEmployeeById(id:number):Observable<Employee>{

  return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
}


// update employee object
updateEmployee(id:number,employee:Employee):Observable<Object>{

  return this.httpClient.put(`${this.baseUrl}/${id}`,employee);

}


// delete employee Object
deleteEmployee(id:number):Observable<Object>{

  return this.httpClient.delete(`${this.baseUrl}/${id}`);
}




}
