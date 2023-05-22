import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponentComponent } from './movies/list-component/list-component.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    ListadoGenericoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
