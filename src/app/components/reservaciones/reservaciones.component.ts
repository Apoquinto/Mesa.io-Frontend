import { Component, OnInit } from '@angular/core';
import { Reservacion } from './reservacion.model';


@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit{
  ngOnInit(): void {
   
  }


  usuario="Miguel Humberto";

  personas="0";
  hora ="00:00";
  fecha = "0";
  dia = 0;
  mes = 0;
  anio = 0;

  show_main: Boolean = true;
  show_form: Boolean = false;
  show_conf: Boolean = false;

  reservaciones:Reservacion[]=[

    new Reservacion("2022-04-19","20:00","4"),
    new Reservacion("2022-05-20","21:00","5"),
    new Reservacion("2022-05-21","22:00","6") 

  ];



  showMain(){
    this.show_main=true;
    this.show_form=false;
    this.show_conf=false;
  }

  showForm(){
    this.show_main=false;
    this.show_form=true;
    this.show_conf=false;
  }

  showConf(per:string, hor:string, fec:string){
    const day = new Date(fec);
    this.personas=per;
    this.hora=hor;
    this.fecha=fec;



    this.dia = day.getDay();
    this.mes = day.getMonth()+1;
    this.anio = day.getFullYear();
  


    this.show_main=false;
    this.show_form=false;
    this.show_conf=true;


    
  }
  
  

  

}
