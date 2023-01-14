import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ModulesModule } from "./modules/modules.module";
import { AppRoutingModule } from './app-routing.module';
import { PromocionesComponent } from './modules/promociones/promociones/promociones.component';
import { PromDialogSecComponent } from './modules/promociones/prom-dialog-sec/prom-dialog-sec.component';
import { PromDialogComponent } from './modules/promociones/prom-dialog/prom-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PromocionesComponent,
    PromDialogSecComponent,
    PromDialogComponent,
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
