import { Component, OnInit, Input } from '@angular/core';

import {Library} from './library.model'

@Component({
  selector: 'mt-library',
  templateUrl: './library.component.html'
})
export class LibraryComponent implements OnInit {

  constructor() { }

  @Input() library : Library;

  ngOnInit() {
  }

}
