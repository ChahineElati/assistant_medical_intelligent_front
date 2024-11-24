import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assistant_medical_intelligent_front';
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

  constructor(private router : Router) { }

  setPageTitle(title: String) {
    this.pageTitle = title;
  }

  seConnecter() {
    this.authenticated = true;
    this.router.navigate(['/']);
    this.pageTitle = "Accueil";
  }

  deconnecter() {
    this.authenticated = false;
  }

}
