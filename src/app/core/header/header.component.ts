import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from "src/app/modules/login/login.component";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent{

    constructor(private dialog:MatDialog){}

    openDialogSesion(){
        console.log('log')
        this.dialog.open(LoginComponent)
    }
}