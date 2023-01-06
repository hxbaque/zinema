import { Component } from "@angular/core";
import { PeliculasServices } from "src/app/shared/services/peliculas.service";

@Component({
    selector: 'app-pelicula',
    templateUrl: './pelicula.component.html',
    styleUrls: ['./pelicula.component.css']
})

export class PeliculaComponent{

    get peliculas(){
        return this.peliculasServices.peliculas;
    }


    constructor(private peliculasServices: PeliculasServices){}
}
// https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb