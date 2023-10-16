import { Component } from '@angular/core';
import { interval, take, combineLatest, forkJoin, zip } from 'rxjs';

const source1 = interval(200).pipe(take(10));
const source2 = interval(300).pipe(take(10));
const source3 = interval(400).pipe(take(10));

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
})
export class ThirdComponent {
  firstTask() {
    const result = combineLatest([source1, source2, source3]);

    result.subscribe((num) => console.log(num));
  }

  secondTask() {
    const result = forkJoin([source1, source2, source3]);

    result.subscribe((num) => console.log(num));
  }

  thirdTask() {
    const result = zip([source1, source2, source3]);

    result.subscribe((num) => console.log(num));
  }
}
