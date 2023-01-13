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

}
