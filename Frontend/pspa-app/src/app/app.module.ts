import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';

import { ProductService } from './service/product.service';
import { UserService } from './service/user.service';
import { AlertifyService } from './service/alertify.service';

import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

const appRoutes: Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'property-detail/:id', component: PropertyDetailComponent},
  {path: 'user/login', component: UserLoginComponent},
  {path: 'user/register', component: UserRegisterComponent},
  {path: '**', component: PropertyListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService,
    UserService,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
