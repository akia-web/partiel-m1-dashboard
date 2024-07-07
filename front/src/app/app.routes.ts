import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MembersComponent } from './components/members/members.component';
import { CoursComponent } from './components/cours/cours.component';
import { StagesComponent } from './components/stages/stages.component';
import { EventsComponent } from './components/events/events.component';
import { MailComponent } from './components/mail/mail.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirection par défaut
    {path: 'dashboard', component:DashboardComponent},
    {path: 'members', component:MembersComponent},
    {path: 'course', component:CoursComponent},
    {path: 'internships', component:StagesComponent},
    {path: 'events', component:EventsComponent},
    {path: 'mails', component:MailComponent},


];
