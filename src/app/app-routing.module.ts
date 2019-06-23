import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
