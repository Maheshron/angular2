import { Component } from '@angular/core'
@Component({
	selector:'employee',
	templateUrl:'app/employee/employee.component.html',
	styleUrls:['app/employee/employee.component.css']
})
export class EmployeeComponent{
	firstname:string = "Anandi";
	lastname:string = "sharma";
	salary:number = 500000;
	department:string = "Training";
	showDetails: boolean = false;
    btnTxt = "show details";
    expName():string{
	return this.firstname + ' ' + this.lastname;
	}
	displayDetails():void{
	this.showDetails = !this.showDetails;
	this.btnTxt = this.showDetails == true?
	"Hide Details ":"Show Details";
	}
}