import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  apiBaseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createPersonne(personne: any) {
    return this.http.post(this.apiBaseURL + "/personnes/create", personne);
  }

  login(personneLogin: any) {
    return this.http.post(this.apiBaseURL + "/personnes/login", personneLogin)
  }

}
