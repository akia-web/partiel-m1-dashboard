import { Component, OnInit } from '@angular/core';
import { Members } from '../../models/members';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent implements OnInit {

  constructor(private formBuilder : FormBuilder ){}

  form = this.formBuilder.group({
    search:[undefined, []]
  });


  allMembers: Members[] = [];

  async getAllMembers(){
    const search = this.form.get('search')?.value;
    const query = search === null ? '' : search;
    const url: string = `http://localhost:3000/api/members?search=${query}`;

    const response = await fetch(url);
    this.allMembers =  await response.json();   
    console.log(this.allMembers)
  }


  ngOnInit(): void {
      this.getAllMembers()
  }
}
