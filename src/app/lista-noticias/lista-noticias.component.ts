import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {

  tituloNoticia:string='Musica Da Semana'
  descricao:string='Esta semana teve o lançamento do novo single do cantor Leonardo Matumona com participação da cantora argelina Yousra Boudah Africa Mama é o titulo da musica'
  image:string='https://i.scdn.co/image/ab67616d0000b273eb2ac1abcb22d72c7bbb9e28'
  constructor() { }

  ngOnInit(): void {
  }

}
