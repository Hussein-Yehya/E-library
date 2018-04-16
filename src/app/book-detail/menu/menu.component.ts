import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {LibrariesService} from '../../libraries/libraries.service'
import {Observable } from 'rxjs/Observable'

import {MenuItem } from '../menu-item/menu-item.model'

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'

})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private librariesService: LibrariesService
              ,private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.librariesService
      .menuOfLibrary(this.route.parent.params['id'])
  }

  addMenuItem(item: MenuItem){
      console.log(item)
  }

}
