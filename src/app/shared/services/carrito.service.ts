import { Injectable } from "@angular/core";

@Injectable()
export class CarritoServices{

    private _carrito: any = [];

    get carrito(){
        //console.log("Work");
       return []
    }


    addCarrito(p:any,cantidad: number){
        this._carrito.push(p);
    }


    cantidadcarrito(){
        return this._carrito.length;
    }


    removerCarrito(id:any){

        

    }


    clearCarrito(){
      
    }
}