import { Component } from '@angular/core';
import { PeliculasServices } from 'src/app/shared/services/peliculas.service';

@Component({
  selector: 'app-peliculas-estreno',
  templateUrl: './peliculas-estreno.component.html',
  styleUrls: ['../../../../../styles.css']
})
export class PeliculasEstrenoComponent {

  get peliculasEstreno(){
    return this.peliculasServices.peliculasEstreno;
  }

  constructor(private peliculasServices: PeliculasServices){}
}
