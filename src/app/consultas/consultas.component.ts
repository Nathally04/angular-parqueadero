import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component ({
    selector: 'consultas',
    templateUrl: './consultas.Component.html'
})

export  class ConsultasComponent {
    public titulo = "Consultar Vehiculo";
    public nombre_componente = 'Componente de consultas';
    public placa: string ;
    public tipo:number ;
    public estado:boolean ;
    public parametro;

    constructor(
        private route: ActivatedRoute,
        private router: Router){
        this.placa = 'ert456';
        this.tipo = 1;
        this.estado = true;
    }

    ngOnInit (){
        this.route.params.forEach((params: Params) =>{
            this.parametro = params ['placa'];
            console.log(params);
        })
    }
}