import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BarComponent } from "./modules/bar/bar.component";
import { CarteleraComponent } from "./modules/cartelera/cartelera.component";
import { ComprasComponent } from "./modules/compras/compras.component";
import { HomeComponent } from "./modules/home/home.component";

const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'compras/:id', component:ComprasComponent},
    {path: 'snack-bar', component:BarComponent},
    {path: 'cartelera', component:CarteleraComponent},

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