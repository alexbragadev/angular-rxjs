import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-cold-and-hot-obervables',
  templateUrl: './cold-and-hot-obervables.component.html',
  styleUrls: ['./cold-and-hot-obervables.component.css']
})
export class ColdAndHotObervablesComponent implements OnInit {
  
  
  constructor() { }
  
  ngOnInit(): void {
    const helloButton = document.querySelector('button#hello');

    // const helloClick$ = new Observable<MouseEvent>(subscriber => {
    //   helloButton?.addEventListener('click', (event) => {
    //     subscriber.next(event);
    //   });
    // });

    // helloClick$.subscribe(event => console.log('Sub 1', event.type, event.x, event.y))

    const ajax$ = ajax('https://random-data-api.com/api/v2/addresses')

    ajax$.subscribe(
      data => console.log('Sub 1', data.response.country) 
    )

    ajax$.subscribe(
      data => console.log('Sub 2', data.response.country) 
    )

    ajax$.subscribe(
      data => console.log('Sub 3', data.response.country) 
    )
  }

}
