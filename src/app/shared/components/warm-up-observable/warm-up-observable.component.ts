import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-warm-up-observable',
  templateUrl: './warm-up-observable.component.html',
  styleUrls: ['./warm-up-observable.component.css']
})
export class WarmUpObservableComponent implements OnInit {
  
  
  constructor() { }
  
  ngOnInit(): void {
    const observable$ = new Observable<string>(subscriber => {
      console.log('Observable executed');
      subscriber.next('José');
      setTimeout(() => subscriber.next('Daniel'), 2000);
      setTimeout(() => subscriber.next('Carol'), 4000);
    });

    console.log('Subscription 1 starts')
    const subscription = observable$.subscribe({
      next: value => console.log('Subscription 1:', value)
    });

    // setTimeout(() => {
    //   console.log('Unsubscribe');
    //   subscription.unsubscribe();
    // }, 3000);

    console.log('Subscription 2 starts')
    setTimeout(() => {
      const subscription2 = observable$.subscribe({
        next: value => console.log('Subscription 2:', value)
      });}, 1000);
    


  }

}
