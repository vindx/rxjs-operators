import { Component } from '@angular/core';
import {
  interval,
  take,
  of,
  delay,
  repeat,
  concatMap,
  mergeMap,
  switchMap,
  exhaustMap,
} from 'rxjs';

const numbers = interval(1000).pipe(take(20));

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  firstTask() {
    const result = numbers.pipe(
      switchMap((num) => of(num).pipe(delay(200), repeat(100)))
    );

    result.subscribe((num) => console.log(num));
  }

  secondTask() {
    const result = numbers.pipe(concatMap(() => interval(100).pipe(take(10))));

    result.subscribe((num) => console.log(num));
  }

  thirdTask() {
    const result = numbers.pipe(
      exhaustMap((num) => of(num).pipe(delay(300), repeat(5)))
    );

    result.subscribe((num) => console.log(num));
  }

  fourthTask() {
    const result = numbers.pipe(
      mergeMap((num) => of(num).pipe(delay(300), repeat(5)))
    );

    result.subscribe((num) => console.log(num));
  }
}
