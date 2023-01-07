import { Component } from '@angular/core';
import { SnackBarServices } from 'src/app/shared/services/snack-bar.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent {

  value: number = 0;

  constructor(private snackBarServices: SnackBarServices) { }

  get snackBar(){
    return this.snackBarServices.snacksBar;
  }

  val(){
    if(!(this.value <= 0)){
      this.value = this.value - 1
    }
  }


}
