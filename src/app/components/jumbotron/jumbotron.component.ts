import { Component } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  imports: [],
  templateUrl: './jumbotron.component.html',
  styleUrl: './jumbotron.component.css'
})
export class JumbotronComponent {
  title: string = "Ryan Kline"
  subtitle: string = "Full Stack Software Engineer"
  // backgroundImage: string = "/assets/images/wallpaper.jpg"
}
