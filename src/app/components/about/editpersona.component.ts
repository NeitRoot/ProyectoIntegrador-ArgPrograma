import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-editpersona',
  templateUrl: './editpersona.component.html',
  styleUrls: ['./editpersona.component.css']
})
export class EditpersonaComponent implements OnInit {
  about: persona = null;

  constructor(private spersona: PersonaService, private activatedRouter: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.spersona.detail(id).subscribe(data => {this.about = data}, err => {alert("Error al modificar"); this.router.navigate(['']);})
  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.spersona.update(id, this.about).subscribe(data => {this.router.navigate(['']);}, err => {alert("Error al modificar"); this.router.navigate(['']);})
  }

}
