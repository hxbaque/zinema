import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
    selector :'app-registrar',
    templateUrl: './registrar.component.html',
    styleUrls: ['./registrar.component.css']

})

export class RegistrarComponent implements OnInit{
    
  
        emailFormControl = new FormControl('', [Validators.required, Validators.email]);
        telf= new FormControl('',Validators.required);
        nombres= new FormControl('',Validators.required);
        apellidos= new FormControl('', Validators.required);
        direccion= new FormControl('', Validators.required);
        ciudad= new FormControl('', Validators.required);
        cedula= new FormControl('', Validators.required);
        password= new FormControl('', Validators.required);
        passwordrepeat= new FormControl('', Validators.required);
        username= new FormControl('', Validators.required);
   

  

    ngOnInit(){
       
    }



   
}