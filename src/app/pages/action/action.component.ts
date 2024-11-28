import { Component } from '@angular/core';
import { MedicamentService } from 'src/app/services/medicament.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {

  constructor(private medicamentService: MedicamentService) {
    this.getMedicaments();
  }

  med = {
    heurePrise: new Date(),
    nom: "",
    posologie: "",

  };

  listeMedicaments: any = [];

  getMedicaments() {
    let idPersonne = localStorage.getItem("id");
    this.medicamentService.getMedicaments(Number.parseInt(idPersonne!)).subscribe(
      (data: any) => {
        data.forEach((medicament: any) => {
          let currTime = new Date();
          let medTime = new Date(medicament.heurePrise);
          if (medTime.getTime() > currTime.getTime() &&
            currTime.getDate() == medTime.getDate() &&
            currTime.getMonth() == medTime.getMonth() &&
            currTime.getFullYear() && medTime.getFullYear()) {
              this.listeMedicaments.push(medicament);
          }
        });
        
      }
    );
  }

  ajouterMed() {
    let idPersonne = localStorage.getItem("id");
    this.medicamentService.ajouterMedicament(Number.parseInt(idPersonne!), this.med).subscribe();
  }

}
