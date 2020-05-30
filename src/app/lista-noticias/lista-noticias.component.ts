import { Component, OnInit } from '@angular/core';
import{ NewsApi} from'../news-api'

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {
  noticia: NewsApi 

  tituloNoticia:string='Musica Da Semana'
  descricao:string='Esta semana teve o lançamento do novo single do cantor Leonardo Matumona com participação da cantora argelina Yousra Boudah Africa Mama é o titulo da musica'
  image:string='https://conteudo.imguol.com.br/c/noticias/c0/2016/10/19/queda-taxa-de-juros-investimento-juros-economia-1476908627751_v2_1920x1228.jpg'
  constructor() {}
  g

  ngOnInit(): void {
  }
}