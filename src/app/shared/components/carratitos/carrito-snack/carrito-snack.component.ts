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

    toggleBadgeVisibility() {
    this.hidden = !this.hidden;
    }

    constructor(private carritoServices: CarritoServices, public router:Router, private dialog:MatDialog){}

    fn(){
        this.router.navigate(['/resumen-bar'])
    }
}