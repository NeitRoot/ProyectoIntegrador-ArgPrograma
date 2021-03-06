import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://froggodev.herokuapp.com/personas/';


  constructor(private http: HttpClient) { }
  
  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL + 'traer/perfil');
  }

  public update(id: number, persona: persona): Observable<any>{
    return this.http.put<any>(this.URL + `personas/editar/${id}`, persona);
  }

  public save(persona: persona):Observable<any>{
    return this.http.post<any>(this.URL + 'personas/crear', persona);
  }

  public detail(id: number):Observable<any>{
    return this.http.get<persona>(this.URL + `personas/detail/${id}`)
  }
}
