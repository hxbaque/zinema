import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { PeliculaComponent } from "./components/peliculas/pelicula/pelicula.component";
import { MaterialModule } from "./material/material.module";

@NgModule({
    declarations: [
        PeliculaComponent
    ],
    exports: [
        PeliculaComponent
    ],
    imports:[
        MaterialModule,
        CommonModule
    ]
})

export class SharedModule{}