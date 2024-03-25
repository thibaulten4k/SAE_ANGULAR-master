
import { Component } from '@angular/core';
import { JoueurService } from '../joueur.service';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-ajout-joueur',
  templateUrl: './ajout-joueur.component.html',
  styleUrls: ['./ajout-joueur.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  providers: [JoueurService]
})
export class AjoutJoueurComponent {
  nouveauJoueur = {
    pseudonyme: '',
    nom: '',
    prenom: '',
    dateDeNaissance: '',
    sexe: ''
  };

  message: string | undefined;

  constructor(private joueurService: JoueurService) { }

  ajouterJoueur() {
      this.joueurService.ajouterJoueur(
      this.nouveauJoueur.pseudo,
      this.nouveauJoueur.nom,
      this.nouveauJoueur.prenom,
      this.nouveauJoueur.dateDeNaissance,
      this.nouveauJoueur.sexe
      ).subscribe(
      res => {
      this.message = res.message;
      console.log('l\'API a répondu :', res);
      },
    );
  }
}
