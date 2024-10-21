import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assistant_medical_intelligent_front';
  authenticated = true;
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

  constructor() { }

  setPageTitle(title: String) {
    this.pageTitle = title;
  }
}
