import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit{
  @Input()
  maximoRating = 5;
  @Input()
  ratingSeleccionado = 0;
  maximoRatinArr =[];

  constructor(){}  
  ngOnInit(): void {
   this.maximoRatinArr = Array(this.maximoRating).fill(0); 
    
  }

}
