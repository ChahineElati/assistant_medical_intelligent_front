import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class AccueilComponent {

  dates = [
    new Date("2024-11-17"),
    new Date("2024-11-16"),
    new Date("2024-11-18"),
    new Date("2024-11-19"),
    new Date("2024-11-15"),
  ];

  dateClass = (date: Date): string => {
    const highlight = this.dates.some(
      d => d.getFullYear() === date.getFullYear() &&
        d.getMonth() === date.getMonth() &&
        d.getDate() === date.getDate()
    );
    return highlight ? 'rendez-vous' : '';
  };
}
