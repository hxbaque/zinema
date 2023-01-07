import { Injectable } from "@angular/core";
import { Peliculas } from "src/assets/ts/MOCK_DATA_Peliculas";
import { Pelicula } from "../interfaces/pelicula.interface";

@Injectable()
export class PeliculasServices{
    private _peliculas: Pelicula[] = [...Peliculas];

    private _peliculasEstreno: Pelicula[] = [];
    private _peliculasPreventa: Pelicula[] = [];
    private _peliculasDisponible: Pelicula[] = [];
    private _peliculasProximo: Pelicula[] = [];

    get peliculas(): Pelicula[]{
        return this._peliculas;
    }

    get peliculasEstreno(): Pelicula[]{
        for (const i of this._peliculas) {
            if(i.id_tipo === 1){
                if(!(this._peliculasEstreno.includes(i))){
                    this._peliculasEstreno.push(i)
                }
            }
        }
        return this._peliculasEstreno;
    }

    get peliculasPreventa(): Pelicula[]{
        for (const i of this._peliculas) {
            if(i.id_tipo === 2){
                if(!(this._peliculasPreventa.includes(i))){
                    this._peliculasPreventa.push(i)
                }
            }
        }
        return this._peliculasPreventa;
    }

    get peliculasDisponible(): Pelicula[]{
        for (const i of this._peliculas) {
            if(i.id_tipo === 3){
                if(!(this._peliculasDisponible.includes(i))){
                    this._peliculasDisponible.push(i)
                }
            }
        }
        return this._peliculasDisponible;
    }

    get peliculasProximamente(): Pelicula[]{
        for (const i of this._peliculas) {
            if(i.id_tipo === 4){
                if(!(this._peliculasProximo.includes(i))){
                    this._peliculasProximo.push(i)
                }
            }
        }
        return this._peliculasProximo;
    }
}