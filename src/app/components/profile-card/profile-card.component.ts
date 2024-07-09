import { Component, Input, input } from '@angular/core';
import { User } from '../../services/api.service';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [],
  template: `
    <div class="user-card" [style]="{ backgroundColor: bgColor }">
      <h1>{{user?.first_name}} {{user?.last_name}}</h1>
      <p>Email: {{user?.email}}</p>
      <button id="btnSelectUser" (click)="handleClick()">Seleccionar usuario</button>
    </div>
  `,
  styles: ``
})
export class ProfileCardComponent {

  bgColor = 'indigo';

  @Input() user: User | undefined;

  handleClick() {
    this.bgColor = 'tomato';
  }

}