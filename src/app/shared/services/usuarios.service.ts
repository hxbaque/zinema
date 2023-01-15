import { Injectable } from "@angular/core";
import { usuarios_data } from "src/assets/ts/MOCK_DATA_Usuarios";
import { users } from "../interfaces/usuario.interface";

@Injectable()
export class UsersServices{
    private _usuarios: users[] = [...usuarios_data];
    get usuarios(): users[]{
        return this._usuarios;
    }
}