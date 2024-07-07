import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  step: WritableSignal<string> = signal("dashboard");

  updateStep(step : string){
    this.step.set(step);
  }
}
