import { Component, OnInit } from '@angular/core';
import { SnackBarServices } from 'src/app/shared/services/snack-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  value: number[] = [];

  constructor(private snackBarServices: SnackBarServices, private router:Router) {
   }

  get snackBar(){
    return this.snackBarServices.snacksBar;
  }

  ngOnInit(): void {
    for(let i=0; i <= this.snackBar.length; i++){
      this.value[i] = 0;
    }
  }

  adquirir(i: number, value:number, idprod:number){
    this.value[i] = this.value[i] + value;

    if(this.value[i] < 0){
      this.value[i]=0;
      //console.log(idprod);
    }

    if(this.value[i] > 10){
      this.value[i]=10;
      //console.log(idprod);
    }

    console.log(idprod);


  }


  addCarrito(){
    this.router.navigate(['/pago']);
  }

}
