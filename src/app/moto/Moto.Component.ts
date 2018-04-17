import { Component } from '@angular/core';
import {Moto} from './Moto'

@Component ({
    selector: 'moto',
    templateUrl: './Moto.Component.html'
})

export class MotoComponent{
    public titulo = 'Componente Moto';
    public moto:Moto;

    ngOnInit(){
        this.moto = new Moto ("sdf455", 1);
        console.log(this.moto);
    }
}