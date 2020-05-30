import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mostrarImage = true
  itens:number[]=[2, 4, 6, 8]
  constructor() { }

  ngOnInit(): void {
  }

}
