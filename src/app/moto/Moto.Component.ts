import { Component } from '@angular/core';
import {Moto} from './Moto'

@Component ({
    selector: 'moto',
    templateUrl: './Moto.Component.html'
})

export class MotoComponent{
    public titulo = 'Componente Moto';
    public moto:Moto;
    public motos:Array<Moto>;
    public cilindraje:boolean;
    public color:string;

    constructor(){
        this.moto = new Moto ("sdf455", 1);
        this.motos=[
            new Moto ("sdf455", 1),
            new Moto ("258sdf", 2)
        ];
        this.cilindraje=true;
        this.color='blue';
    }

    ngOnInit(){
        console.log(this.moto);
        console.log(this.motos);
    }

    cambiarCilindraje (valor){
        this.cilindraje= valor;
    }
}