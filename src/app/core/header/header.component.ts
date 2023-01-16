import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from "src/app/modules/login/login.component";
import { LoginService } from "src/app/shared/services/login.service";
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent{

    constructor(private dialog:MatDialog, public loginService: LoginService, private router: Router){}

    openDialogSesion(){
        this.dialog.open(LoginComponent)
    }
    perfil(){
        this.router.navigate(['/mi-cuenta']);
    }
    Salir(){
        this.loginService.username = "";
        this.router.navigate(['']);
    }
    
}