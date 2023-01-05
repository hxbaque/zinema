import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
    imports: [
        CoreModule,
        SharedModule,
    ]
})

export class ModulesModule{}