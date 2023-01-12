import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { MaterialModule } from "../shared/material/material.module";
import { SharedModule } from "../shared/shared.module";
import { ComprasComponent } from "./compras/compras.component";
import { HomeComponent } from "./home/home.component";
import { StepperComponent } from "./stepper/stepper/stepper.component";
import { BarComponent } from './bar/bar.component';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { CommonModule } from "@angular/common";
import { PagoComponent } from "./pago/pago.component";
import { LoginComponent } from "./login/login.component";
import { RegistrarComponent } from "./registrar/registrar.component";

@NgModule({
    declarations: [
        HomeComponent,
        ComprasComponent,
        StepperComponent,
        BarComponent,
        CarteleraComponent,
        PagoComponent,
        LoginComponent,
        RegistrarComponent
    ],
    exports: [
        HomeComponent,
        ComprasComponent,
        PagoComponent
    ],
    imports: [
        CoreModule,
        SharedModule,
        MaterialModule,
        CommonModule
    ]
})

export class ModulesModule{}