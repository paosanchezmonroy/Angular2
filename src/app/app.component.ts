import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    
   setTimeout(() => {
    this.moviesEnCines= [{
      title: 'SpiderMan',
      releaseDate : new Date(),
      price: 1400.99
    },
    {
      title: 'Moana',
      releaseDate : new Date("13-Octubr-2021"),
      price: 349.45
    
    },
    {
      title: 'SpiderMan',
      releaseDate : new Date(),
      price: 1400.99
    }  ]
   }, 500);
  }
  title = 'Se envia lo que esta en el compotente';
  ocultar = false; 
  
  moviesEnCines;
  moviesProxEstrenos=[{
    title: 'Avengers: Endgame',
    releaseDate : new Date(),
    price: 1400.99
  },
  {
    title: 'Inception',
    releaseDate : new Date("13-Octubr-2021"),
    price: 349.45
  
  },
  {
    title: 'Rocky',
    releaseDate : new Date("13-Octubr-2021"),
    price: 349.45
  
  }]

  duplicarnumero(valor:number): number{
    return valor * 2;
  }
  manejarRated(voto: number): void{
    alert(voto)
  }
}
