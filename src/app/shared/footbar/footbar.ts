import { Component } from '@angular/core';
//ci permette di mettere logica nell'html
//esempio -> <div *ngIf = "isLoggedIn"> Benvenuto </div>
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footbar',
  imports: [CommonModule],
  templateUrl: './footbar.html',
  styleUrl: './footbar.css',
})
export class Footbar {

}
