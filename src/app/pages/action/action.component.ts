import { Component } from '@angular/core';
import { HistoriqueService } from 'src/app/services/historique.service';
import { MedicamentService } from 'src/app/services/medicament.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {

  constructor(private medicamentService: MedicamentService, private historiqueService: HistoriqueService) {
    this.getMedicaments();
  }

  med = {
    heurePrise: new Date(),
    nom: "",
    posologie: "",
    prise: false,
  };

  listeMedicaments: any = new Set();

  getMedicaments() {
    let idPersonne = localStorage.getItem("id");
    this.medicamentService.getMedicaments(Number.parseInt(idPersonne!)).subscribe(
      (data: any) => {
        this.listeMedicaments.clear();
        data.forEach((medicament: any) => {
          let currTime = new Date();
          let medTime = new Date(medicament.heurePrise);
          if (
            currTime.getDate() <= medTime.getDate() &&
            currTime.getMonth() <= medTime.getMonth() &&
            currTime.getFullYear() <= medTime.getFullYear() &&
            medicament.prise == false
          ) {
            this.listeMedicaments.add(medicament);
          }
        });

      }
    );
  }

  ajouterMed() {
    let idPersonne = localStorage.getItem("id");
    this.medicamentService.ajouterMedicament(Number.parseInt(idPersonne!), this.med).subscribe(
      () => {
        this.getMedicaments();
      }
    );
  }

  prendreMedicament(idMedicament: Number, datePris: Date) {
    let medTime = new Date(datePris);
    let idPersonne = localStorage.getItem("id");
    let currDate = new Date();
    console.log("curr" + currDate);
    console.log("med" + medTime);

    if (
      medTime.getHours() > currDate.getHours() &&
      medTime.getDate() >= currDate.getDate() &&
      medTime.getMonth() >= currDate.getMonth() &&
      medTime.getFullYear() >= currDate.getFullYear()) {
      this.historiqueService.marquerPris(Number.parseInt(idPersonne!), idMedicament, true).subscribe(
        () => {
          this.getMedicaments();
        }
      );
    } else {
      this.historiqueService.marquerPris(Number.parseInt(idPersonne!), idMedicament, false).subscribe(
        () => {
          this.getMedicaments();
        }
      );
    }
  }

}
