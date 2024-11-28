import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  apiBaseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  ajouterMedicament(id: number, medicament: any) {
    return this.http.post(this.apiBaseURL + "/medicaments/personne/" + id + "/ajouter", medicament);
  }

  getMedicaments(id: number) {
    return this.http.get(this.apiBaseURL + "/medicaments/personne/" + id);
  }

}
