import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { MaterialModule } from "../shared/material/material.module";
import { SharedModule } from "../shared/shared.module";
import { ComprasComponent } from "./compras/compras.component";
import { HomeComponent } from "./home/home.component";
import { StepperComponent } from "./stepper/stepper/stepper.component";
import { BarComponent } from './bar/bar.component';
import { CarteleraComponent } from './cartelera/cartelera.component';

@NgModule({
    declarations: [
        HomeComponent,
        ComprasComponent,
        StepperComponent,
        BarComponent,
        CarteleraComponent
    ],
    exports: [
        HomeComponent,
        ComprasComponent
    ],
    imports: [
        CoreModule,
        SharedModule,
        MaterialModule
    ]
})

export class ModulesModule{}