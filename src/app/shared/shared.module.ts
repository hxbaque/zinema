import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { MaterialModule } from "./material/material.module";
import { PeliculasServices } from "./services/peliculas.service";
import { PeliculasEstrenoComponent } from './components/peliculas/peliculas-estreno/peliculas-estreno.component';
import { PeliculasPreventaComponent } from './components/peliculas/peliculas-preventa/peliculas-preventa.component';
import { PeliculasDisponibleComponent } from './components/peliculas/peliculas-disponible/peliculas-disponible.component';
import { PeliculasProximamenteComponent } from './components/peliculas/peliculas-proximamente/peliculas-proximamente.component';
import { SnackBarComponent } from './components/snacks/snack-bar/snack-bar.component';
import { SnackBarServices } from "./services/snack-bar.service";
import { CarritoSnackComponent } from "./components/carratitos/carrito-snack/carrito-snack.component";
import { CarritoServices } from "./services/carrito.service";

@NgModule({
    declarations: [
        PeliculasEstrenoComponent,
        PeliculasPreventaComponent,
        PeliculasDisponibleComponent,
        PeliculasProximamenteComponent,
        SnackBarComponent,
        CarritoSnackComponent
    ],
    exports: [
        PeliculasEstrenoComponent,
        PeliculasPreventaComponent,
        PeliculasDisponibleComponent,
        PeliculasProximamenteComponent,
        SnackBarComponent,
        CarritoSnackComponent
    ],
    imports:[
        MaterialModule,
        CommonModule
    ],
    providers:[
        PeliculasServices,
        SnackBarServices,
        CarritoServices
    ]
})

export class SharedModule{}