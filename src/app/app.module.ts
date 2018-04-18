import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { SalidasComponent } from './salidas/salidas.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresosComponent,
    ConsultasComponent,
    SalidasComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
