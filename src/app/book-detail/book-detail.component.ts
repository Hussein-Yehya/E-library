import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {LibrariesService} from '../libraries/libraries.service'
import {Library} from '../libraries/library/library.model'


@Component({
  selector: 'mt-book-detail',
  templateUrl: './book-detail.component.html'
})

export class BookDetailComponent implements OnInit {

  library: Library

  constructor(private librariesSerivce: LibrariesService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.librariesSerivce.bookById(this.route.snapshot.params['id'])
    .subscribe(library => this.library = library)
  }

}
