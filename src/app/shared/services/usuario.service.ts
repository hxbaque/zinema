import { Injectable } from "@angular/core";

import { mockDataUsuarios } from "src/assets/ts/MOCK_DATA_Usuarios";
import { Usuario } from "../interfaces/usuario.interface";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService{

    private _usuarioR: Usuario[] = [...mockDataUsuarios]

    get usuariosR(): Usuario[]{
        return this._usuarioR;
    }


}