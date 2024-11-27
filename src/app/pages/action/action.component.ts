import { Component } from '@angular/core';
import { MedicamentService } from 'src/app/services/medicament.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {

  constructor(private medicamentService : MedicamentService) {}

  med = {
    heurePrise : new Date(),
    nom : "",
    posologie : "",
    
  }

  ajouterMed() {
    let idPersonne = localStorage.getItem("id");
    this.medicamentService.ajouterMedicament( Number.parseInt(idPersonne!), this.med).subscribe();
  }

}
