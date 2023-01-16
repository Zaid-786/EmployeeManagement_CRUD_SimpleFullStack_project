package com.example.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.exception.ResourceNotFoundException;
import com.example.model.Employee;
import com.example.repository.EmployeeRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;

// get all employee
	@GetMapping("/employee")
	public List<Employee> getAllEmp() {
		return employeeRepository.findAll();

	}

//	create employee rest Api
	@PostMapping("/employee")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}

//	get employee by id rest API
	@GetMapping("/employee/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {

		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with !" + id));
		return ResponseEntity.ok(employee);

	}

//	update employee rest API
	@PutMapping("/employee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetail) {

		Employee employee1 = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with !" + id));

		employee1.setFirstName(employeeDetail.getFirstName());
		employee1.setLastName(employeeDetail.getLastName());
		employee1.setEmailId(employeeDetail.getEmailId());

		Employee updateEmployee = employeeRepository.save(employee1);

		return ResponseEntity.ok(updateEmployee);

	}

	
// delete employee rest API	
	
	@DeleteMapping("/employee/{id}")
	public ResponseEntity<Map<String, Boolean>> deletedEmployeeById(@PathVariable Long id) {
	
		Employee employee1 = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with !" + id));

		employeeRepository.delete(employee1);
		
		Map<String,Boolean> response=new HashMap<>();
		response.put("Element is Deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
	
	
	
}
