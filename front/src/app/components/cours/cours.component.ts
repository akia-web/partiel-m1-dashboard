import { Component, OnInit } from '@angular/core';
import { Cours } from '../../models/cours';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.scss'
})
export class CoursComponent implements OnInit {
  allCours: Cours[] = [];
  async getAllCours(){
    const url: string = 'http://localhost:3000/api/cours'

    const response = await fetch(url);
    this.allCours =  await response.json();   
    console.log(this.allCours)
  }

  ngOnInit(): void {
      this.getAllCours()
  }
}
