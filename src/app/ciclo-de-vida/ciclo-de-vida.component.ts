import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../utilidades/rating/rating.component';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit{

//El constructor no forma parte del evento del ciclo de vida
  constructor (private changeDetectorRef: ChangeDetectorRef){}
  @Input()
  titulo: String;

  @ViewChild(RatingComponent)
  ratingComponent : RatingComponent;

  timer: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    console.log('OnInit');
    this.timer = setInterval(()=> console.log (new Date()),1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
    console.log(changes);
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
    clearInterval(this.timer);
  }

  ngDoCheck(): void {
    console.log('DoCheck');
    
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
   this.ratingComponent.ratingSeleccionado = 3;
   this.changeDetectorRef.detectChanges();
  }

}
