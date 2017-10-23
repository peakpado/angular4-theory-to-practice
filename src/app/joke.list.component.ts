import {
  AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, QueryList, ViewChild,
  ViewChildren
} from '@angular/core';
import {Joke} from './joke';
import { JokeComponent } from './joke.component';

@Component({
  selector: 'joke-list',
  template: `
<joke-form (jokeCreated)="addJoke($event)"></joke-form>
<h4 #header>View Jokes</h4>
<joke *ngFor="let j of jokes" [joke]="j" (jokeDeleted)="deleteJoke($event)">
  <span class="setup">{{j.setup}}</span>
  <h1 class="punchline">{{j.punchline}}</h1>
</joke>
    
    <h4>Content Jokes</h4>
    <ng-content></ng-content>
  `
})
export class JokeListComponent implements AfterViewInit, AfterContentInit {
  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke('What did the cheese say when it looked in the mirror?', 'Hello-me (Halloumi)'),
      new Joke('What kind of cheese do you use to disguise a small horse?', 'Mask-a-pony (Mascarpone)')
    ];
  }

  @ViewChild(JokeComponent)
  jokeViewChild: JokeComponent;

  @ViewChildren(JokeComponent)
  jokeViewChildren: QueryList<JokeComponent>;

  @ViewChild('header')
  headerEl: ElementRef;

  @ContentChild(JokeComponent)
  jokeContentChild: JokeComponent;

  ngAfterViewInit() {
    console.log('JokeListComp:ngAfterViewInit:', this.jokeViewChild);

    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log('jokes:', jokes);

    console.log('headerEl:', this.headerEl);
    this.headerEl.nativeElement.textContent = 'This is new text content';


  }

  ngAfterContentInit() {
    console.log('jokeContentChild:', this.jokeContentChild);
  }

  addJoke(joke) {
    this.jokes.unshift(joke);
  }

  /* TODO: Flesh out the below function to actually delete a joke from the list.
     Have the function called when the user clicks the delete button.
  */
  deleteJoke(joke) {
    const indexToDelete = this.jokes.indexOf(joke);
    if (indexToDelete !== -1) {
      this.jokes.splice(indexToDelete, 1);
    }
  }
}
