import { Injectable } from "@angular/core";

@Injectable()
export class CarritoServices{

    private _carrito: any = [];

    get carrito(){
        console.log("Work");
       return []
    }
    addCarrito(){
        
    }
    removerCarrito(){

    }
    clearCarrito(){
      
    }
}