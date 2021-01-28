import { Component, OnInit,Inject,Input} from '@angular/core';
import { Pista } from './clase-pista';
import { Favorit } from './clase-favorito';
import { favoritos } from './favoritos';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  pista:string;
  artista:string;
  albun:string;
  imatge:string;
  nombre:string;
  id:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(public dialog: MatDialog,private obtfavorit: favoritos) {}
  filterPost = '';
  filterPost2 = '';
  filterPost3 = '';
  
  
  lista_pista: Pista[] = [new Pista('ale-mendoza-ft-guatemala-buena-vibra-guate','ale mendoza','Buena vibra','audio01','img1',1),
  new Pista('APRIETALA - RVFV','RVFV','aprietala','audio02','img2',2),
  new Pista('Bad Gyal - Zorra','bad gyal','zorra','audio03','img3',3),
  new Pista('Blin Blin Ft. Juanka- Bad Gyal ','ale mendoza','blin blin','audio04','img4',4),
  new Pista('C.-Tangana-Niño-de-Elche-La-Húngara-Tú-Me-Dejaste-De-Querer','c tangana','tu me dejastes de querer','audio05','img5',5),
  new Pista('CNCO Ft. Manuel Turizo - Pegao','manuel turizo','que quienes somos','audio06','img06',6),
  new Pista('Cosculluela - Un AK','cosculluela','un ak','audio07','img7',7),
  new Pista('Cosculluela Ft. Jowell Y Randy - Pa La Pared (WWW.ELGENERO.COM)','jowell randy','santa cos','audio08','img8',8),
  new Pista('CULONA  Original Elias x Daviles De Novelda','original elias','culona','audio09','img9',9),
  new Pista('morad-mdlr','morad','MDLR','audio10','img10',10),
  new Pista('Mayel Jimenez - Mí Cataleya DJ ADEMARO','mayel jimenez','mi cataleya','audio11','img11',11),
  new Pista('Los Yakis - Solo A Mi Vera ','los yakis','solo a mi vera','audio12','img12',12),
  new Pista('enchule','raw alejandro','afrodisiaco','audio13','img13',13),];
  dada: string = "hh";
  dada1: string = "aa";
  listafavoritos: Favorit[] = [];
  localfavoritos=JSON.parse(localStorage.getItem("favoritoos"));
  afegir_favorits(pista:string,artista:string,albun:string,imatge:string,nombre:string,id:number): void{
    
    this.listafavoritos.push(new Favorit(pista,artista,albun,imatge,nombre,id));
    localStorage.setItem("favoritoos",JSON.stringify(this.listafavoritos));
    console.log(JSON.parse(localStorage.getItem("favoritoos")));
}

pista_obtenida=[];

ngOnInit() {
  this.obtenirFavorits();
}

obtenirFavorits(): void {
  this.obtfavorit.ObtenirFavorits().subscribe(localfavoritos => this.localfavoritos  = localfavoritos);
}

public getpista(event:any, idd:number): void  {
  var nombre;
  var artista;
  var albun;
  var imatge;
  
  event.preventDefault();
  
  for (let pistaa of this.lista_pista  ){
       if (pistaa.id==idd){
            nombre=pistaa.nombre;
            artista=pistaa.artista;
            albun=pistaa.albun;
            imatge=pistaa.imatge;
       }
  }
  this.pista_obtenida=[nombre,artista,albun,imatge];
  console.log(this.pista_obtenida);
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












displayedColumns: string[] = ['imatge', 'nombre', 'artista', 'album'];
datasource = this.lista_pista;


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
