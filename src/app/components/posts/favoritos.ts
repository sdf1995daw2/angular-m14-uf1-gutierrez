import { Pista } from './clase-pista';
import { Favorit } from './clase-favorito';
import { Component,Input,OnInit,Inject,Injectable, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { BrowserModule } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { NgModule } from '@angular/core';
NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
})
export interface DialogData {
  pista:string;
  artista:string;
  albun:string;
  imatge:string;
  nombre:string;
  id:number;
}
@Injectable({
  providedIn: 'root',
})
@Component({
  
  templateUrl: './favoritos.html',
  styleUrls: ['./favoritos.css']
})
export class favoritos{

  constructor(public dialog: MatDialog) {}
  filterPost = '';
  filterPost2 = '';
  filterPost3 = '';
  localfavoritos: Favorit[] =JSON.parse(localStorage.getItem("favoritoos"))
  
  ObtenirFavorits(): Observable<Favorit[]> {
   // console.log(JSON.parse(localStorage.getItem("favoritoos")));
    console.log("favoritos",this.localfavoritos);
    return of(this.localfavoritos);
    
  }
  dada: string = "hh";
  dada1: string = "aa";
pista_obtenida=[];
public getpista(event:any, idd:number): void  {
  var nombre;
  var artista;
  var albun;
  var imatge;
  
  event.preventDefault();
  
  for (let pistaa of this.localfavoritos  ){
       if (pistaa.id==idd){
            nombre=pistaa.nombre;
            artista=pistaa.artista;
            albun=pistaa.albun;
            imatge=pistaa.imatge;
       }
  }
  console.log("d");
  this.pista_obtenida=[nombre,artista,albun,imatge];
  console.log(this.pista_obtenida);
}
favoritoobt=this.localfavoritos;
verfavoritos(){
  console.log("prueba:",this.favoritoobt);
}
Salirlibro(libros: Array<any>) {
 libros.length = 0;
}

openDialog(event:any, pista:string,artista:string,albun:string,imatge:string,nombre:string,id:number): void {
 
  const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    width: '690px',
    data: {id: id,pista: pista ,artista: artista,albun:albun,imatge: imatge,nombre:nombre}
    
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   
  });
}


mostrarEfecte: boolean = true;

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'ialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
    