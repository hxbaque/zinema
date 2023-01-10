import { Component, OnInit } from '@angular/core';
import { SnackBarServices } from 'src/app/shared/services/snack-bar.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  value: number[] = [];

  constructor(private snackBarServices: SnackBarServices) {
   }

  get snackBar(){
    return this.snackBarServices.snacksBar;
  }

  ngOnInit(): void {
    for(let i=0; i <= this.snackBar.length; i++){
      this.value[i] = 0;
    }
  }

  trackByFn(index: number, item: any): number{
    return index;
  }

  adquirir(i: number, value:number){
    this.value[i] = this.value[i] + value;
  }


}
