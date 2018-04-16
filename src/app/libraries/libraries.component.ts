import { Component, OnInit } from '@angular/core';
import {Library} from './library/library.model'
import {LibrariesService} from './libraries.service'

@Component({
  selector: 'mt-libraries',
  templateUrl: './libraries.component.html',
})

export class LibrariesComponent implements OnInit {

  libraries: Library[]

  constructor(private librariesService: LibrariesService) { }

  ngOnInit() {
    this.librariesService.libraries()
      .subscribe(libraries => this.libraries = libraries)
  }

}
