import { Component, OnInit } from "@angular/core";
import { SnackBarServices } from 'src/app/shared/services/snack-bar.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-snack-row',
    templateUrl: './snack-row.component.html',
    styleUrls: ['./snack-row.component.css']
})
export class SnackRowComponent implements OnInit{

    value: number[] = [];

    constructor(private snackBarServices: SnackBarServices, private router:Router) {}

    get snackBar(){
        return this.snackBarServices.snacksBar;
    }

    ngOnInit(): void {
        for(let i=0; i <= this.snackBar.length; i++){
            this.value[i] = 0;
        }
    }

    adquirir(i: number, value:number){
        this.value[i] = this.value[i] + value;

        if(this.value[i] < 0){
            this.value[i]=0;
        }

        if(this.value[i] > 10){
            this.value[i]=10;
        }
    }
}