import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ModulesModule } from "./modules/modules.module";
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    //PromocionesComponent,
=======
>>>>>>> parent of f0f9d1b (Promociones update)
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // AdminModule,
    CoreModule,
    ModulesModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
