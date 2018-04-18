import { Component } from '@angular/core';

@Component ({
    selector: 'salidas',
    templateUrl: './salidas.Component.html'
})

export  class SalidasComponent {
    public nombre_componente = 'Componente de salidas';
    public placa: string ;
    public tipo:number ;
    public estado:boolean ;

    constructor(){
        this.placa = 'ert456';
        this.tipo = 1;
        this.estado = false;
    }
}