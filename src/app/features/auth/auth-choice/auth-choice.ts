//pagina intermedia per dare all'utente la possibilità 
// di fare login o registrarsi
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-auth-choice',
  standalone: true,
  imports: [RouterLink, LoginComponent],
  templateUrl: './auth-choice.html',
  styleUrl: './auth-choice.css',
})

export class AuthChoice {

}