import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-page-content',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './app-content.component.html',
  styleUrl: './app-content.component.scss',
})
export class AppContentComponent {}
