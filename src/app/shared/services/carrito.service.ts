import { Injectable } from "@angular/core";

@Injectable()
export class CarritoServices{

    private _carrito: any = [];
     
    totalsn=0;
    xmap = new Map();

    get carrito(){
        //console.log("Work");
       return []
    }


    addCarrito(p:any,cantidad: number){
        //this._carrito.push(p.precio);
             this.xmap.set(p,cantidad); // id producto y cantidad comprada 
    }

    removerCarrito(id:any){

       
    }
    
    cantidadcarrito(){
        return this.xmap.size;
    }

    totalSnack(){
        for(let item of this.xmap.entries()){
            let a=item[0].precio*item[1];
            this.totalsn=this.totalsn+a;
        }
        return this.totalsn;
    }

    

    clearCarrito(){
      
    }
}