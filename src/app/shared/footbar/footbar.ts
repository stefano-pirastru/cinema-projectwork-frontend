import { Component } from '@angular/core';
//ci permette di mettere logica nell'html
//esempio -> <div *ngIf = "isLoggedIn"> Benvenuto </div>
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footbar.html',
  styleUrls: ['./footbar.css'],
})
export class Footbar {

}
