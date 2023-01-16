import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {users} from "src/app/shared/interfaces/usuario.interface"
import { Router} from '@angular/router';
import { UsersServices } from "src/app/shared/services/usuarios.service";

@Component({
    selector :'app-registrar',
    templateUrl: './registrar.component.html',
    styleUrls: ['./registrar.component.css']

})

export class RegistrarComponent implements OnInit{
    
        
        emailFormControl = new FormControl('', [Validators.required, Validators.email]);
        telfFormControl= new FormControl('',Validators.required);
        nombresFormControl= new FormControl('',Validators.required);
        apellidosFormControl= new FormControl('', Validators.required);
        direccionFormControl= new FormControl('', Validators.required);
        ciudadFormControl= new FormControl('', Validators.required);
        cedulaFormControl= new FormControl('', Validators.required);
        passwordFormControl= new FormControl('', Validators.required);
        passwordrepeatFormControl= new FormControl('', Validators.required);
        usernameFormControl= new FormControl('', Validators.required);
        constructor(private usersService: UsersServices, private routes: Router) {}

        get usuario(){
           return this.usersService.usuarioos;
          }
        

  

    ngOnInit(){
       
    }
    Submit(): void {
        const user : users={
            id_user: 0,
            cedula: 0,
            telefono: 0,
            nombres: "",
            ciudad: "",
            dirrecion: "",
            usuario: "",
            email: "",
            password: "",
        }

        user.cedula=Number(this.cedulaFormControl.value);
        user.telefono=Number(this.telfFormControl.value);
        user.nombres=String(this.nombresFormControl.value).concat(String(this.apellidosFormControl.value));
        user.ciudad=String(this.ciudadFormControl.value);
        user.dirrecion=String(this.direccionFormControl.value);
        user.usuario=String(this.usernameFormControl.value);
        user.email=String(this.emailFormControl.value);
        user.password=String(this.passwordFormControl.value);
        user.id_user=this.usuario.length;
        this.usuario.push(user);
        console.log(this.usuario);
        this.routes.navigate(['']);

    }



   
}