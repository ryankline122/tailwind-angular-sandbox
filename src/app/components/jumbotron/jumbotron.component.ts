import { Component } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  imports: [],
  templateUrl: './jumbotron.component.html',
  styleUrl: './jumbotron.component.css'
})
export class JumbotronComponent {
  title: string = "A Simple Heading"
  subtitle: string = "A Simple Sub-heading"
  // backgroundImage: string = "/assets/images/wallpaper.jpg"
}
