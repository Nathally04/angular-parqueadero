import { Component } from '@angular/core';

@Component ({
    selector: 'carro',
    templateUrl: './Carro.Component.html'
})

export  class CarroComponent {
    public nombre_componente = 'Componente de carro';
    public listado_carros = 'carro 1, carro 2';
    public placa: string ;
    public edad:number ;
    public mayorDeEdad:boolean ;
    public carros:Array<any> = ['carro1', 25, 'carro2'] ;
    comodin:any ;

    constructor(){
        this.placa = 'Nathally';
        this.edad =15;
        this.comodin =8;
        this.mayorDeEdad= false;
    }

    cambiarNombre (){
        this.placa = 'Sebas';
    }

    cambiarEdad (edad){
        this.edad=8;
    }

    ngOnInit(){
        this.cambiarNombre();
        this.cambiarEdad(this.edad);
        console.log(this.placa +" "+ this.edad);
        //Variables y Alcance
        var uno = 8;
        var dos = 15;

        if(uno == 8){
            let uno = 1;
            var dos = 88;
            console.log("dentro del if: "+ uno);
        }
        console.log ("fuera del if: "+ uno);
    }
}