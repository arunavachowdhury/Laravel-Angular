import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullname : new FormControl(),
      email: new FormControl(),
      skills: new FormGroup({
        skillName: new FormControl,
        experienceYear: new FormControl,
        proficiency: new FormControl,
      })
    });
  }

  onSubmit(){
    this.logKeyValuePairs(this.employeeForm);
    
  }

  logKeyValuePairs(group: FormGroup){
    Object.keys(group.controls).forEach((key: string)=> {
      const abstractControl = group.get(key);
      if(abstractControl instanceof FormGroup){
        this.logKeyValuePairs(abstractControl);
      }else{
        console.log('key = '+key+' value = '+abstractControl.value);
        
      }
    });
    
  }
}
