import { Component, ViewEncapsulation } from '@angular/core';
import { MedicamentService } from 'src/app/services/medicament.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class AccueilComponent {

  dates = [
    new Date("2024-12-17"),
    new Date("2024-12-16"),
    new Date("2024-12-18"),
    new Date("2024-12-19"),
    new Date("2024-12-15"),
  ];

  medicament: any = {}

  constructor(private medicamentService : MedicamentService) {}

  dateClass = (date: Date): string => {
    const highlight = this.dates.some(
      d => d.getFullYear() === date.getFullYear() &&
        d.getMonth() === date.getMonth() &&
        d.getDate() === date.getDate()
    );
    return highlight ? 'rendez-vous' : '';
  };

  ngOnInit() {
    let idPersonne = localStorage.getItem("id");
    this.medicamentService.getMedicaments(Number.parseInt(idPersonne!)).subscribe(
      (data: any) => {
        data = data.filter((item: any) => item.prise==false);
        this.medicament = data[0];
      }
    );
  }
}
