import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombreP: string;
  descripcionP: string;
  img: string;
  constructor(private router: Router, private sProyectos: ProyectosService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyectos = new Proyectos(this.nombreP, this.descripcionP, this.img)
    this.sProyectos.save(proyectos).subscribe(data => {alert("Proyecto añadido"); this.router.navigate([''])}, err =>{alert("Error"); this.router.navigate([''])});
  }

}
