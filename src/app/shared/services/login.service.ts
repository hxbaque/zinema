import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    username: string = '';
    password: string = '';
    id_usuario: number = 0;
}