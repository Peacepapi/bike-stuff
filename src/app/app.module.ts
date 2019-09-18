import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsService } from './services/products.service';
import { ProductCardComponent } from './components/product-card/product-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { CartComponent } from './components/cart/cart.component'; 
import { CartService } from './services/cart.service';
import { ValidatorService } from './services/validator.service';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

const routes: Routes = [
  { path:'cart', component: CartComponent },
  { path:'home', component: ProductListComponent },
  { path:'confirmation/:data', component: ConfirmationComponent },
  { path:'', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    CartComponent,
    NavComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
  ],
  providers: [ProductsService, CartService, ValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
