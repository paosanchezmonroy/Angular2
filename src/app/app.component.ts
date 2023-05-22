import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    
   setTimeout(() => {
    this.movies= [{
      title: 'SpiderMan',
      releaseDate : new Date(),
      price: 1400.99
    },
    {
      title: 'Moana',
      releaseDate : new Date("13-Octubr-2021"),
      price: 349.45
    
    }]
   }, 3000);
  }
  title = 'Se envia lo que esta en el compotente';

  movies;

  duplicarnumero(valor:number): number{
    return valor * 2;
  }
}
