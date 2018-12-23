import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {EmployeeComponent } from './employee/employee.component'
import { sampleComponent } from './sample/sample.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ,EmployeeComponent,sampleComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
