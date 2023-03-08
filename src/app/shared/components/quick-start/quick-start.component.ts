import { Component, OnInit } from '@angular/core';
import {
  name$,
  storeDataOnServer,
  storeDataOnServerError
} from '../../../core/services/external';

@Component({
  selector: 'app-quick-start',
  templateUrl: './quick-start.component.html',
  styleUrls: ['./quick-start.component.css']
})
export class QuickStartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    name$.subscribe(value => console.log(value));

    storeDataOnServer('Some value').subscribe(value => console.log(value));

    storeDataOnServerError('Other value').subscribe({
      next: value => console.log(value),
      error: err => console.log("Error when saving: ", err.message) 
    });
  }

}
