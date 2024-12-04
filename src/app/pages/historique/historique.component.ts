import { Component } from '@angular/core';
import { HistoriqueService } from 'src/app/services/historique.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent {

  historique: any[] = [];

  constructor(private historiqueService: HistoriqueService) { }

  chercherHistorique() {
    let idPersonne = localStorage.getItem("id");
    this.historiqueService.chercherHistorique(Number.parseInt(idPersonne!)).subscribe((data: any) => {
      this.historique = data;
      console.log(this.historique);
    });
  }

  ngOnInit() {
    this.chercherHistorique();
  }

}
