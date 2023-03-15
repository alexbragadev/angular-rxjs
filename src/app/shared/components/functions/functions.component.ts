import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    ///////////////////////////of/////////////////////////////
    ourOwnOf('Carol', 'Angerleide', 'Gilza').subscribe({
      next: value => console.log(value),
      complete: () => console.log('Completed')
    })

    // const names$ = new Observable<string>(subscriber => {
    //   subscriber.next('Carol')
    //   subscriber.next('Angerleide')
    //   subscriber.next('Gilza')
    //   subscriber.complete()
    // })

    // names$.subscribe({
    //   next: value => console.log(value),
    //   complete: () => console.log('Completed')
    // })

    function ourOwnOf(...args: string[]): Observable<string> {
      return new Observable<string>(subscriber => {
        for(let i = 0; i < args.length; i++) {
          subscriber.next(args[i]);
        }
        subscriber.complete()
      })
    }
  ///////////////////////////from/////////////////////////////
  const somePromise = new Promise((resolve, reject) => {
    resolve('Resolved');
  });

  const observableFromPromise$ = from(somePromise);
  observableFromPromise$.subscribe({
    next: value => console.log(value),
    error: err => console.log('Error', err),
    complete: () => console.log('Completed')
  });
  ///////////////////////////from-event/////////////////////////////
//   const triggerButton = document.querySelector('button#trigger');

// // const subscription = fromEvent<MouseEvent>(triggerButton, 'click').subscribe(
// //   event => console.log(event.type, event.x, event.y)
// // );
//   const triggerClick$ = new Observable<MouseEvent>(subscriber => {
//     const clickHandlerFn = event => {
//       console.log('Event callback executed');
//       subscriber.next(event);
//     };

//     triggerButton?.addEventListener('click', clickHandlerFn);

//     return () => {
//       triggerButton?.removeEventListener('click', clickHandlerFn);
//     };
//   });

//   const subscription = triggerClick$.subscribe(
//     event => console.log(event.type, event.x, event.y)
//   );

//   setTimeout(() => {
//     console.log('Unsubscribe');
//     subscription.unsubscribe();
//   }, 5000);
  ///////////////////////////timer/////////////////////////////
  console.log('App started timer');

  const timer$ = new Observable<number>(subscriber => {
    const timeoutId = setTimeout(() => {
      console.log('Timeout!');
      subscriber.next(0);
      subscriber.complete();
    }, 2000);

    return () => clearTimeout(timeoutId);
  });

  const subscription = timer$.subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed')
  });

  setTimeout(() => {
    subscription.unsubscribe();
    console.log('Unsubscribe');
  }, 1000);

   ///////////////////////////interval/////////////////////////////
   
  console.log('App started interval');

  const interval$ = new Observable<number>(subscriber => {
    let counter = 0;
    
    const intervalId = setInterval(() => {
      console.log('Timeout!');
      subscriber.next(counter++);
    }, 1000);

    return () => clearInterval(intervalId);
  });

  const subscription2 = interval$.subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed')
  });

  setTimeout(() => {
    subscription2.unsubscribe();
    console.log('Unsubscribe');
  }, 5000);

  }

}
