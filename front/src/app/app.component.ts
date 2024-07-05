import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuService } from './services/menu.service';
import { MembersComponent } from './components/members/members.component';
import { CoursComponent } from './components/cours/cours.component';
import { EventsComponent } from './components/events/events.component';
import { MailComponent } from './components/mail/mail.component';
import { StagesComponent } from './components/stages/stages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, MenuComponent, MembersComponent, CoursComponent, EventsComponent, MailComponent,StagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'partiel-m1-dashboard';

  constructor(public menuService: MenuService){}

  pageIs(step:string){
    return step === this.menuService.step()

  }
}
