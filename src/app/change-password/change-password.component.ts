import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.styl']
})
export class ChangePasswordComponent  {

  form: FormGroup;

  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      oldPassword: ['',Validators.required],
      newPassword: ['',Validators.required],
      confirmPassword: ['',Validators.required]
    });
  }

  get oldPassword(){ return this.form.get('oldPassword');}
  get newPassword(){ return this.form.get('newPassword');}
  get confirmPassword(){ return this.form.get('confirmPassword');}


}
