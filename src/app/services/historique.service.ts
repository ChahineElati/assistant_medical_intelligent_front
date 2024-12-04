import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  apiBaseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  marquerPris(idPersonne: Number, idMedicament: Number, prisetat: boolean) {
    const params = new HttpParams({ fromObject: { pris: prisetat } });
    return this.http.post(this.apiBaseUrl + `/historique/${idPersonne}/${idMedicament}`, {}, { params });
  }

  chercherHistorique(idPersonne: Number) {
    return this.http.get(this.apiBaseUrl + `/historique/personne/${idPersonne}`);
  }

}
