import { Pista } from './clase-pista';
import { Favorit } from './clase-favorito';
import { Component,Input } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './favoritos.html',
  styleUrls: ['./favoritos.css']
})
export class favoritos {
  @Input() Pista: Pista;
  @Input() Favorit: Favorit;
  dada: string = "hh";
  dada1: string = "aa";
    displayedColumns: string[] = ['imatge', 'nombre', 'artista', 'album'];
}
    