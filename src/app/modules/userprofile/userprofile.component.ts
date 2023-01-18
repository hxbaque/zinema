import { Component, OnInit } from '@angular/core';
import { SnackBarServices } from 'src/app/shared/services/snack-bar.service';
import { Router } from '@angular/router';
import { SnackBars } from 'src/app/shared/interfaces/snack.interface';
import { CarritoServices } from 'src/app/shared/services/carrito.service';
import { UsersServices } from "src/app/shared/services/usuarios.service";
import { LoginService } from "src/app/shared/services/login.service";
import {users} from "src/app/shared/interfaces/usuario.interface"

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  id = '';
  constructor( public loginService: LoginService, private router: Router,private usersService: UsersServices,public carrito:CarritoServices) {
    this.id = localStorage.getItem('usuario') || '';
   }
   get usuarioos(): users[]{
    return this.usersService.usuarioos;
}
   total=this.carrito.totalSnack();
  ngOnInit(): void {
  }
  displayedColumns: string[] = ["id_user",
    "cedula",
    "telefono",
    "nombres",
    "ciudad",
    "dirrecion",
    "usuario",
    "email",
    "password"];
  dataSource = this.usuarioos;
}
