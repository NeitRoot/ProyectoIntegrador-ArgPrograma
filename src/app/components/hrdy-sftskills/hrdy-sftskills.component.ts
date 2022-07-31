import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hrdy-sftskills',
  templateUrl: './hrdy-sftskills.component.html',
  styleUrls: ['./hrdy-sftskills.component.css']
})
export class HrdySftskillsComponent implements OnInit {
  skills: Skills[] = [];
  constructor(private sskills: SkillsService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.nuevahabilidad();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
   
  }

  nuevahabilidad(): void{
    this.sskills.lista().subscribe(data => {this.skills = data});
  }

  delete(id?: number){
    if(id != undefined){
      this.sskills.delete(id).subscribe(data =>{this.nuevahabilidad();}, err => {alert("Falló eliminación");})
    }
  }

  
}
