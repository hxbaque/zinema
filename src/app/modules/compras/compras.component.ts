import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { PeliculasServices } from "src/app/shared/services/peliculas.service";
import { Pelicula } from "src/app/shared/interfaces/pelicula.interface";

@Component({
    selector: 'app-compras',
    templateUrl: './compras.component.html',
    styleUrls: ['./compras.component.css']
})

export class ComprasComponent implements OnInit{

    constructor(private route: ActivatedRoute, private pelis:PeliculasServices, ){
      
    }
    
    id_pelicula:any;
    infopeli=null;

    ngOnInit() {
         this.id_pelicula=this.route.snapshot.paramMap.get("id");

         for( let i of this.pelis.peliculas){
            if(i.id_pelicula==this.id_pelicula){
                this.infopeli
            }

         }
    }

    

    
}