import { Component, OnInit } from '@angular/core';
import { Members } from '../../models/members';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent implements OnInit {

  allMembers: Members[] = [];

  async getAllMembers(){
    const url: string = 'http://localhost:3000/api/members'

    const response = await fetch(url);
    this.allMembers =  await response.json();   
    console.log(this.allMembers)
  }


  ngOnInit(): void {
      this.getAllMembers()
  }
}
