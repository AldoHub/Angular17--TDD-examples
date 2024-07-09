import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [],
  template: `
    <div>
      <p>{{message}}</p>
      <button (click)="handleClick()">Pulsa para cambiar</button>
    </div>
  `,
  styles: ``
})
export class SwitchComponent {

  active: boolean = true;

  get message() {
    return this.active ? 'encendido' : 'apagado';
  }

  handleClick() {
    this.active = !this.active;
  }

}