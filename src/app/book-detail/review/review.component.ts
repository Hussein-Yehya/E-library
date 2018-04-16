import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {LibrariesService} from '../../libraries/libraries.service'
import {Observable } from 'rxjs/Observable'

@Component({
  selector: 'mt-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {

  reviews: Observable<any>

  constructor(private librariesService: LibrariesService
              ,private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.librariesService
      .reviewsOfBook(this.route.parent.snapshot.params['id'])
  }

}
