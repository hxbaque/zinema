import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router} from '@angular/router';
import { Usuario } from "src/app/shared/interfaces/usuario.interface";
import { LoginService } from "src/app/shared/services/login.service";
import { UsuarioService } from "src/app/shared/services/usuario.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})
export class LoginComponent{
    constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>, private loginService: LoginService,
      private usuarioServices: UsuarioService) { }

  alert: boolean = false;

  usuarioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })

  get usuariosR(): Usuario[]{
    return this.usuarioServices.usuariosR
  }

  onSubmit(){
    this.usuariosR.forEach(element => {
      if(this.usuarioLogin.value.usuario === element.nombre_usuario && this.usuarioLogin.value.password === element.contrasena){
        this.loginService.username = this.usuarioLogin.value.usuario;
        localStorage.setItem('usuario', this.usuarioLogin.value.usuario);
        localStorage.setItem('cedula', element.cedula);
        this.router.navigate(['']);
        this.dialogRef.close();
      }else{
        this.alert = true;
        setTimeout(() => this.alert=false, 4000);
      }
    });
  }
}