import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarroComponent } from './carro/carro.Component';
import { MotoComponent } from './moto/moto.Component';

@NgModule({
  declarations: [
    AppComponent,
    CarroComponent,
    MotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
