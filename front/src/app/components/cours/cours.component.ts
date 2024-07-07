import { Component, OnInit } from '@angular/core';
import { Cours } from '../../models/cours';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from '../popup/popup.component';
import { FormCours } from '../../models/formCours';

@Component({
  selector: 'app-cours',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PopupComponent],
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.scss'
})
export class CoursComponent implements OnInit {
  constructor(private formBuilder : FormBuilder ){}

  form = this.formBuilder.group({
    search:[undefined, []]
  });

  // formPopup : FormGroup<FormCours> = this.formBuilder.group({
  //   professor:['', []]
  // });

  allCours: Cours[] = [];
  openPopup: boolean = false

  name: string = 'cours'

  async getAllCours(){
    const search = this.form.get('search')?.value;
    const query = search === null ? '' : search;
    const url: string = `http://localhost:3000/api/cours?search=${query}`;

    const response = await fetch(url);
    this.allCours =  await response.json();   
    console.log(this.allCours);
  }

  ngOnInit(): void {
      this.getAllCours();
  }



}
