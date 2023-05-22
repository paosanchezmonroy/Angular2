import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit{
  constructor() {}
  @Input()
  movies;

  ngOnInit(): void {
   
  }
  remover(indexmovie: number): void{
    this.movies.splice(indexmovie,1);
  }
}
