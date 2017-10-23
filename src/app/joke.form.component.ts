import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import {Joke} from "./joke";

@Component({
  selector: 'joke-form',
  templateUrl: 'joke.form.component.html',
  styles: [
    `
      .card {
        background-color: gray;
      }
    `
  ],
  // encapsulation: ViewEncapsulation.Native
})
export class JokeFormComponent {
  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}
