import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit{
  constructor() {}
  movies;

  ngOnInit(): void {
    this.movies= [{
      title: 'SpiderMan-Far for home',
      releaseDate : new Date(),
      price: 1400.99
    },
    {
      title: 'Moana',
      releaseDate : new Date("13-Octubr-2021"),
      price: 349.45
    
    }]
  }

}
