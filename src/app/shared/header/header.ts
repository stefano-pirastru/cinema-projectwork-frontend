import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, Navbar],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {}