import { Component } from '@angular/core';
import { PeliculasServices } from 'src/app/shared/services/peliculas.service';

@Component({
  selector: 'app-peliculas-disponible',
  templateUrl: './peliculas-disponible.component.html',
  styleUrls: ['../../../../../styles.css']
})
export class PeliculasDisponibleComponent {

  get peliculasDisponible(){
    return this.peliculasServices.peliculasDisponible;
  }

  constructor(private peliculasServices: PeliculasServices) { }

}
