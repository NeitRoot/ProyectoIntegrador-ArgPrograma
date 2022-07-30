import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  yearE: string = '';
  constructor(private router: Router, private educacionS: EducacionService ) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Educacion(this.nombreE, this.descripcionE, this.yearE);
    this.educacionS.save(expe).subscribe(data => {alert("Educacion añadida"); this.router.navigate([''])}, err =>{alert("Error"); this.router.navigate([''])});
  }

}
