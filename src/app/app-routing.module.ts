import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BarComponent } from "./modules/bar/bar.component";
import { CarteleraComponent } from "./modules/cartelera/cartelera.component";
import { ComprasComponent } from "./modules/compras/compras.component";
import { HomeComponent } from "./modules/home/home.component";
import { PagoComponent } from "./modules/pago/pago.component";
import { PromocionesComponent } from "./modules/promociones/promociones.component";
import { RegistrarComponent } from "./modules/registrar/registrar.component";
import { AdinfoComponent } from "./modules/adinfo/adinfo.component";

const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'compras/:id', component:ComprasComponent},
    {path: 'snack-bar', component:BarComponent},
    {path: 'cartelera', component:CarteleraComponent},
    {path: 'pago', component:PagoComponent},
    {path: 'promociones', component:PromocionesComponent},
    {path: 'registrar', component:RegistrarComponent},
    {path: 'info', component:AdinfoComponent},
]


@NgModule({
    exports:[
        RouterModule
    ],
    imports:[
        RouterModule.forRoot(routes)
    ]
})

export class AppRoutingModule{}