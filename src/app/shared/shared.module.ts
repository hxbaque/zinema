import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { MaterialModule } from "./material/material.module";
import { PeliculasServices } from "./services/peliculas.service";
import { PeliculasEstrenoComponent } from './components/peliculas/peliculas-estreno/peliculas-estreno.component';
import { PeliculasPreventaComponent } from './components/peliculas/peliculas-preventa/peliculas-preventa.component';
import { PeliculasDisponibleComponent } from './components/peliculas/peliculas-disponible/peliculas-disponible.component';
import { PeliculasProximamenteComponent } from './components/peliculas/peliculas-proximamente/peliculas-proximamente.component';

@NgModule({
    declarations: [
        PeliculasEstrenoComponent,
        PeliculasPreventaComponent,
        PeliculasDisponibleComponent,
        PeliculasProximamenteComponent
    ],
    exports: [
        PeliculasEstrenoComponent,
        PeliculasPreventaComponent,
        PeliculasDisponibleComponent,
        PeliculasProximamenteComponent
    ],
    imports:[
        MaterialModule,
        CommonModule
    ],
    providers:[
        PeliculasServices
    ]
})

export class SharedModule{}