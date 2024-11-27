import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonneService } from './services/personne.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assistant_medical_intelligent_front';

  formCreation = {
    nom: "",
    prenom: "",
    email: "",
    password: "",
    dateNaissance: new Date(),
  }

  authenticated = false;
  pageTitle: String = "Accueil";
  navigation = [
    {
      page: "Accueil",
      link: "/",
    },
    {
      page: "Action",
      link: "/action",
    },
    {
      page: "Rendez-vous",
      link: "/rendez-vous",
    },
    {
      page: "Historique",
      link: "/historique",
    },
    {
      page: "Profil",
      link: "/profil",
    }
  ]

  constructor(private router: Router, private personneService: PersonneService) { }

  setPageTitle(title: String) {
    this.pageTitle = title;
  }

  seConnecter() {
    this.authenticated = true;
    this.router.navigate(['/']);
    this.pageTitle = "Accueil";
  }

  deconnecter() {
    // this.authenticated = false;
  }

  creer() {
    this.personneService.createPersonne(this.formCreation).subscribe();
  }

}
