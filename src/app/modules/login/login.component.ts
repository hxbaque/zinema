import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router} from '@angular/router';
import { LoginService } from "src/app/shared/services/login.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})
export class LoginComponent{
    constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>, private loginService: LoginService) { }

  alert: boolean = false;

  usuarioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit(){

    if (this.usuarioLogin.value.usuario=="mauro" && this.usuarioLogin.value.password=="123"){
      this.loginService.username = this.usuarioLogin.value.usuario;
      localStorage.setItem('u', this.usuarioLogin.value.usuario)

      console.log(localStorage.getItem('u') || '')
      this.router.navigate(['']);
      this.dialogRef.close();
    }
    else{
      this.alert = true;
      setTimeout(() => this.alert=false, 4000);
    }
  }
}