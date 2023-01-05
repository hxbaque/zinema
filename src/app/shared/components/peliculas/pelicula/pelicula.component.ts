import { Component } from "@angular/core";
import { Peliculas } from "src/assets/ts/MOCK_DATA_Peliculas";

@Component({
    selector: 'app-pelicula',
    templateUrl: './pelicula.component.html',
    styleUrls: ['./pelicula.component.css']
})

export class PeliculaComponent{


    data = [...Peliculas];
    constructor(){
    }
}
// https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb