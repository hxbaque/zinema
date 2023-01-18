import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router} from '@angular/router';
import { users } from "src/app/shared/interfaces/usuario.interface";
import { LoginService } from "src/app/shared/services/login.service";
import { UsersServices } from "src/app/shared/services/usuarios.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})
export class LoginComponent{
    constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>, private loginSerice: LoginService,private usersService: UsersServices) { }

  alert: boolean = false;

  usuarioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })
  get usuario(){
    return this.usersService.usuarioos;
   }


  onSubmit(){

    for (let i =0;i <this.usuario.length;i++){
      if(this.usuarioLogin.value.usuario==this.usuario[i].usuario && this.usuarioLogin.value.password==this.usuario[i].password){
        this.loginSerice.username = this.usuarioLogin.value.usuario;
        localStorage.setItem('usuario', this.usuarioLogin.value.usuario);
        this.router.navigate(['']);
        this.dialogRef.close();
      }else{
        this.alert = true;
        setTimeout(() => this.alert=false, 4000);
      }
    }
    
    

  }
}