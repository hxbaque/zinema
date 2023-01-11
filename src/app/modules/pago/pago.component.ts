import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<PagoComponent>){}
  selected = 'option2';
  
  ngOnInit(): void {
  }
  pagoNuevo = new FormGroup({
    nombres: new FormControl('',Validators.required),
    correo: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    nombret: new FormControl('', Validators.required),
    tarjeta: new FormControl('', Validators.required),
    codigo: new FormControl('', Validators.required)
  })
  onSubmit(){
    let objToSend: NavigationExtras = {
      queryParams: {
        nombres: this.pagoNuevo.value.nombres,
        correo: this.pagoNuevo.value.correo,
        numero: this.pagoNuevo.value.numero,
        nombret: this.pagoNuevo.value.nombret,
        tarjeta: this.pagoNuevo.value.tarjeta,
        codigo: this.pagoNuevo.value.codigo
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.redirectTo('/snack-bar', objToSend);
  }
  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosCliente: objToSend}}));
  }
  salir(){
    this.dialogRef.close();
  }

}
