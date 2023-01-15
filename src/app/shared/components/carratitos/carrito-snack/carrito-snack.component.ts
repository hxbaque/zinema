import { Component } from "@angular/core";
import { CarritoServices } from "src/app/shared/services/carrito.service";
import { PagoComponent } from "src/app/modules/pago/pago.component";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
    selector: 'app-carrito-snack',
    templateUrl: './carrito-snack.component.html',
    styleUrls: ['./carrito-snack.component.css']
})
export class CarritoSnackComponent{
    hidden = false;
    p=true;
    activo=false;
    count=this.carritoS.cantidadcarrito;
    suma=0;
    toggleBadgeVisibility() {
    this.hidden = !this.hidden;
    }

    constructor(public carritoS: CarritoServices, public router:Router, private dialog:MatDialog){
      
    }


    badge(){
        if(this.carritoS.cantidadcarrito() > 0){
            this.p=false;
        }return this.p;
    }

    total(){
        this.suma=this.carritoS.totalSnack();
        return this.suma;
    }

    fn(){
        this.router.navigate(['/resumen-bar'])
    }
}