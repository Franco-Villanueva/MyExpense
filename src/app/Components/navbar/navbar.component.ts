import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ToggleComponent } from '../shared/toggle/toggle.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ToggleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title = 'navbar'
}
