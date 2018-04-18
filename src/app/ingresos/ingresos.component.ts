import { Component } from '@angular/core';
import { Ingresos } from './ingresos';

@Component ({
    selector: 'ingresos',
    templateUrl: './ingresos.Component.html'
})

export  class IngresosComponent {
    public titulo = "Ingreso Vehiculo";
    public nombre_componente = 'Componente de ingresos';
    public ingresos: Ingresos;

    constructor(){
        this.ingresos = new Ingresos ("", null, null);
    }

    OnSubmit (){
        console.log(this.ingresos);
    }
}

