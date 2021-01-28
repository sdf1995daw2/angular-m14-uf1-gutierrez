import { Component } from '@angular/core';
import { Pista } from './clase-pista';
import { Favorit } from './clase-favorito';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2';
  filterPost = '';
  listafavoritos: Favorit[] =[];
  lista_pista: Pista[] = [new Pista('ale-mendoza-ft-guatemala-buena-vibra-guate','ale mendoza','Buena vibra','audio01','img01'),
  new Pista('APRIETALA - RVFV','ale mendoza','aprietala','audio02','img02'),
  new Pista('Bad Gyal - Zorra','bad gyal','zorra','audio03','img03'),
  new Pista('Blin Blin Ft. Juanka- Bad Gyal ','ale mendoza','blin blin','audio04','img04'),
  new Pista('C.-Tangana-Niño-de-Elche-La-Húngara-Tú-Me-Dejaste-De-Querer','c tangana','tu me dejastes de querer','audio05','img01'),
  new Pista('CNCO Ft. Manuel Turizo - Pegao','manuel turizo','que quienes somos','audio06','img06'),
  new Pista('Cosculluela - Un AK','cosculluela','un ak','audio07','img07'),
  new Pista('Cosculluela Ft. Jowell Y Randy - Pa La Pared (WWW.ELGENERO.COM)','jowell randy','santa cos','audio08','img08'),
  new Pista('CULONA  Original Elias x Daviles De Novelda','original elias','culona','audio09','img09'),
  new Pista('morad-mdlr','morad','MDLR','audio10','img10'),
  new Pista('Mayel Jimenez - Mí Cataleya DJ ADEMARO','mayel jimenez','mi cataleya','audio11','img11'),
  new Pista('Los Yakis - Solo A Mi Vera ','ale mendoza','solo a mi vera','audio12','img12'),
  new Pista('enchule','raw alejandro','afrodisiaco','audio13','img13'),];

  dada: string = "hh";
  dada1: string = "aa";
  afegir_favorits(pista:string,artista:string,albun:string,imatge:string,nombre:string): void{
    this.listafavoritos.push(new Favorit(pista,artista,albun,imatge,nombre,));
    console.log("agregado a favoritos");
}


  animate = false;
  toggleAnimate(){
    this.animate = !this.animate;
  }
displayedColumns: string[] = ['imatge', 'nombre', 'artista', 'album'];
datasource = this.lista_pista;
ngOnInit() {
}

}
