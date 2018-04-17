import { OrderService } from './order/order.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { LibraryComponent } from './libraries/library/library.component';

import {LibrariesService} from './libraries/libraries.service';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MenuComponent } from './book-detail/menu/menu.component';
import { ShoppingCartComponent } from './book-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './book-detail/menu-item/menu-item.component';
import { ReviewComponent } from './book-detail/review/review.component'
import { ShoppingCartService } from './book-detail/shopping-cart/shopping-cart.service';
import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    LibrariesComponent,
    LibraryComponent,
    BookDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemsComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    LibrariesService,
    ShoppingCartService, OrderService,
     {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
