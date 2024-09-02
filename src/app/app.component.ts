import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppContentComponent } from './components/app-content/app-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-blog';
}
