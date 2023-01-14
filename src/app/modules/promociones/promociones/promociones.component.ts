import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PromDialogComponent } from '../prom-dialog/prom-dialog.component';
import { PromDialogSecComponent } from '../prom-dialog-sec/prom-dialog-sec.component';
@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  constructor(private router: Router,private dialog:MatDialog) { }
  
  palomitas(){
    this.dialog.open(PromDialogComponent);
  }

  descuento(){
    this.dialog.open(PromDialogSecComponent);
  }
  ngOnInit(): void {
  }

}
