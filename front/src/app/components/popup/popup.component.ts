import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormCours } from '../../models/formCours';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Input() name?: string;
  @Input() form?: FormGroup<FormCours>;
  
  closePopup() {
    this.close.emit();
  }
}
