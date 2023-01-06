import { Injectable } from "@angular/core";
import { Peliculas } from "src/assets/ts/MOCK_DATA_Peliculas";
import { Pelicula } from "../interfaces/pelicula.interface";

@Injectable()
export class PeliculasServices{
    private _peliculas: Pelicula[] = [...Peliculas];

    get peliculas(): Pelicula[]{
        return this._peliculas;
    }
}