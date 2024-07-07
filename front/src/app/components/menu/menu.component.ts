import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(public menuService: MenuService, private router: Router){}

  step = 'dashboard'

  go(step:string){
    this.menuService.updateStep(step)
    this.step = step
    this.router.navigate([`${step}`])
  }
}
