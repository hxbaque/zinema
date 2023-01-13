import { Component} from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import { MatStep } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent{


  nasientos=1;
  pageIndex=0;
  constructor(private _formBuilder: FormBuilder) {}

  
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['', Validators.required]});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
  thirdFormGroup: FormGroup = this._formBuilder.group({thirdCtrl: ['']});

  selectedValue: string="0";
  selectedCar: string="0";
  asientos: string[] = ["A1","A2","A3","A4","A5","A6","A7","A8","A9"
                       ,"B1","B2","B3","B4","B5","B6","B7","B8","B9"
                       ,"C1","C2","C3","C4","C5","C6","C7","C8","C9"
                       ,"D1","D2","D3","D4","D5","D6","D7","D8","D9"
                       ,"E1","E2","E3","E4","E5","E6","E7","E8","E9"
                       ,"F1","F2","F3","F4","F5","F6","F7","F8","F9"]
  foods: any = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
    {value: '7', viewValue: '7'},
    {value: '8', viewValue: '8'},
    {value: '9', viewValue: '9'},
    {value: '10', viewValue: '10'},
  ];

}
