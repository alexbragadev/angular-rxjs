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
      setTimeout(() => {
        subscriber.next('Natanael')
        subscriber.complete()
      }, 2000)
    });

    console.log('Before subscibre')
    observable$.subscribe(value => console.log(value))
    console.log('After subscribe')
  }

}
