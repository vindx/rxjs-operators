import { Component } from '@angular/core';
import { interval, take, map, filter } from 'rxjs';

const numbers = interval(100).pipe(take(20));

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  firstTask() {
    const result = numbers.pipe(map((num) => num * 3));

    result.subscribe((num) => console.log(num));
  }

  secondTask() {
    const result = numbers.pipe(take(7));

    result.subscribe((num) => console.log(num));
  }

  thirdTask() {
    const result = numbers.pipe(filter((num) => num % 2 === 0));

    result.subscribe((num) => console.log(num));
  }
}
