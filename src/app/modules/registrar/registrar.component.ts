import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
    selector :'app-registrar',
    templateUrl: './registrar.component.html',
    styleUrls: ['./registrar.component.css']

})

export class RegistrarComponent{
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}