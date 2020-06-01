import { Injectable } from '@angular/core';
import { NewsApi } from './news-api'

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  noticia: NewsApi

  constructor() {
    this.noticia = {
      tituloNoticia: 'Musica Da Semana',
      imagem: 'https://i.scdn.co/image/ab67616d0000b273eb2ac1abcb22d72c7bbb9e28',
      descricao: 'Nessa semana tem o lançamento do mais recente single do cantor leonardo matumona com participaçao '
    }

  }
  buscaNoticia() {
    return this.noticia
  }
}
