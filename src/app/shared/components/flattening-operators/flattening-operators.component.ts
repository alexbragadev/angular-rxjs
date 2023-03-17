import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EMPTY, fromEvent, Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, concatMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-flattening-operators',
  templateUrl: './flattening-operators.component.html',
  styleUrls: ['./flattening-operators.component.css']
})
export class FlatteningOperatorsComponent implements OnInit {
  @ViewChild('#endpoint')  endpointInput: HTMLInputElement | undefined;
  @ViewChild('#fetch')  fetchButton: HTMLButtonElement | undefined;
  // fetchButton = document.querySelector('button#fetch');

  constructor() { }

  ngOnInit(): void {
    ///////////////////////////concatMap/////////////////////////////
    const source$ = new Observable(subscriber => {
      setTimeout(() => subscriber.next('A'), 2000);
      setTimeout(() => subscriber.next('B'), 5000);
      });
      
      console.log('App has started');
      source$.pipe(
        concatMap(value => of(1, 2))
      ).subscribe(value => console.log(value));

      // no exemplo abaixo basicamente podemos concatenar um valor dentro de uma url

      // fromEvent(this.fetchButton, 'click').pipe(
      //   map(() => this.endpointInput.value),
      //   concatMap(value =>
      //     ajax(`https://random-data-api.com/api/${value}/random_${value}`)
      //   )
      // ).subscribe(
      //   value => console.log(value)
      // );
      // aqui é um catchError de url não correta
      const acessValue$ = ajax('https://random-data-api.com/api/name/878').pipe(
        catchError(error => of(`Could not fetch data: ${error}`))
      )

      acessValue$.subscribe({
        next: value => console.log(value)
      })

  }

}
