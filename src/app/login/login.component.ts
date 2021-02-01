import { AuthService } from './../shared/_services/auth.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

public form: FormGroup;

  constructor(
    public fb: FormBuilder,
    public _authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

initForm(){
  this.form = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',Validators.required]
  })
}

// on form submit validate the fields
formValidationCheck(){
  if(this.form.valid){
    this.submitFormData();
  } else {
    this.validateAllFormFields(this.form)
  }
}

submitFormData(){

}

validateAllFormFields(formGroup:FormGroup){
Object.keys(formGroup.controls).forEach(field =>{
  const control = formGroup.get(field);
  if (control instanceof FormControl) {
    control.markAsTouched({onlySelf:true});
  } else if (control instanceof FormGroup){
    this.validateAllFormFields(control)
  }
})
}

}
