import { Component } from "@angular/core";
import { CarritoServices } from "src/app/shared/services/carrito.service";

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

    constructor(private carritoServices: CarritoServices){}

    fn(){
        this.carritoServices.carrito
    }
}