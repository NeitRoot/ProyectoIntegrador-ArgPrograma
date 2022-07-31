import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-newhabilidad',
  templateUrl: './newhabilidad.component.html',
  styleUrls: ['./newhabilidad.component.css']
})
export class NewhabilidadComponent implements OnInit {
  habilidad: string;
  valor: number;
  img: string;
  constructor(private sskills: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skills = new Skills(this.habilidad, this.valor, this.img)
    this.sskills.save(skills).subscribe(data => {alert("Habilidad añadida"); this.router.navigate([''])}, err =>{alert("Error"); this.router.navigate([''])});
  }

}
