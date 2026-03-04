import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-header',
  imports: [CommonModule, Navbar],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
