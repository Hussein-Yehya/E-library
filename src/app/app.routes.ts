import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {LibrariesComponent} from './libraries/libraries.component'
import {BookDetailComponent} from './book-detail/book-detail.component'
import {MenuComponent} from './book-detail/menu/menu.component'
import {ReviewComponent} from './book-detail/review/review.component'
import {OrderComponent} from './order/order.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'libraries', component: LibrariesComponent},
  {path: 'libraries/:id', component: BookDetailComponent,
    children: [
      {path:'',redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'review', component: ReviewComponent}
    ]},
  {path: 'order', component: OrderComponent},
  {path: 'about', component: AboutComponent},

]
