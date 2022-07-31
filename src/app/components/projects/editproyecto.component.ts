import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { Router, ActivatedRoute } from '@angular/router';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {
  proy: Proyectos = null;
  constructor(private activatedRouter: ActivatedRoute, private router: Router, private sProyectos: ProyectosService) { }

  ngOnInit(): void {
    const id =this.activatedRouter.snapshot.params['id'];
    this.sProyectos.detail(id).subscribe(data =>{this.proy = data;}, err =>{alert("No se pudo modificar");this.router.navigate(['']);})
  }
  
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyectos.update(id, this.proy).subscribe(data => {this.router.navigate(['']);}, err => {alert("No se pudo modificar");this.router.navigate(['']);})
  }


}
