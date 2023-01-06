import { Component } from '@angular/core';
import { PeliculasServices } from 'src/app/shared/services/peliculas.service';

@Component({
  selector: 'app-peliculas-preventa',
  templateUrl: './peliculas-preventa.component.html',
  styleUrls: ['../../../../../styles.css']
})
export class PeliculasPreventaComponent {

  get peliculasPreventa(){
    return this.peliculasServices.peliculasPreventa;
  }

  constructor(private peliculasServices: PeliculasServices) { }

}
