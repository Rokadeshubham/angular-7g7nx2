import { Component } from '@angular/core';

import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { Insert } from './insert';
import { CreateService } from './create.service';

@Component({
  selector: 'my-app',
  templateUrl: './create.component.html'

})
export class CreateComponent  {
  studentForm:FormGroup;
  datasaved=true;
  
  public StudentInformation = [];
  constructor(private formbuilder:FormBuilder,private _service:CreateService){
    _service.GetStudents().subscribe(s=>this.StudentInformation=s);
  }
  ngOnInit(){
    this.studentForm = this.formbuilder.group({
      RollNo:['',Validators.required],
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      Subject:['',Validators.required]
    })
  }

  create(insert:Insert) {
    this._service.Create(insert).subscribe(insert => { this.datasaved = true })
  }
  onFormSubmit() {
    let insert = this.studentForm.value;
    this.create(insert);
    this.studentForm.reset();
  }
  //Update
  onFormUpdate(e){
    this.studentForm.setValue(e);
   
   
  }
  onFormModify(){
        let insert = this.studentForm.value;
        this.update(insert);
        this.studentForm.reset();
  }
  update(insert:Insert){
    this._service.UpdateStudent(insert).subscribe(s=>{this.datasaved=true});
  }


}
