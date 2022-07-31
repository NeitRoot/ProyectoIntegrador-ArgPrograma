import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-edithabilidad',
  templateUrl: './edithabilidad.component.html',
  styleUrls: ['./edithabilidad.component.css']
})
export class EdithabilidadComponent implements OnInit {
skill: Skills
  constructor(private activatedRouter: ActivatedRoute, private router: Router, private sskills: SkillsService) { }

  ngOnInit(): void {
    const id =this.activatedRouter.snapshot.params['id'];
    this.sskills.detail(id).subscribe(data =>{this.skill = data;}, err =>{alert("No se pudo modificar");this.router.navigate(['']);})
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sskills.update(id, this.skill).subscribe(data => {this.router.navigate(['']);}, err => {alert("No se pudo modificar");this.router.navigate(['']);})
  }

}
