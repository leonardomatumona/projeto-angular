import { Component, OnInit } from '@angular/core';
import{ NewsApi} from'../news-api'
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {
  noticia: NewsApi 

  
  constructor(private service: NewsApiService) {
this.noticia= this.service.buscaNoticia()
  }

  ngOnInit(): void {
  }
}
