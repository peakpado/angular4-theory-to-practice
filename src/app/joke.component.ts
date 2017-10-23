import {
  AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit,
  Output, SimpleChanges
} from '@angular/core';

import {Joke} from './joke';

@Component({
  selector: 'joke',
  templateUrl: 'joke.component.html'
})
export class JokeComponent implements OnInit, OnChanges, OnDestroy {
  @Input() joke: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  deleteJoke() {
    this.jokeDeleted.emit(this.joke);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: ');
    for (const key in changes) {
      console.log(`${key}: previous: ${changes[key].previousValue}, current: ${changes[key].currentValue}`);
    }
  }

  ngOnInit() {
    console.log('ngOnInit: ', this.joke);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
