import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-empty-obervable',
  templateUrl: './empty-obervable.component.html',
  styleUrls: ['./empty-obervable.component.css']
})
export class EmptyObervableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const observable$ = new Observable<string>(subscriber => {
      console.log('Observable executed')
      subscriber.next('Alesson')
      subscriber.next('Gilza')

      setTimeout(() => subscriber.error(new Error('Failure')), 2000);
      setTimeout(() => {
        subscriber.next('Natanael')
      }, 4000);

      return () => {
        console.log('Teardown')
      };
    });

    console.log('Before subscibre')
    observable$.subscribe({
      next: value => console.log(value),
      error: err => console.log(err.message),
      complete: () => console.log('Completed')
    });
    console.log('After subscribe')
  }

}
