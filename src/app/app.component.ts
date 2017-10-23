import { Component } from '@angular/core';
import { Joke } from './joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <joke-list></joke-list>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  joke: Joke = new Joke('third joke', 'this is content joke');
}
