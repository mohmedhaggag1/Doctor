import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing.module';

import { NavBarComponent } from 'src/nav-bar/nav-bar.component';
import { HomeComponent } from 'src/home/home.component';
import { CarouselComponent } from 'src/carousel/carousel.component';
import { SpecialtyComponent } from './../specialty/specialty.component';
import { ContactUsComponent } from './../contact-us/contact-us.component';
import { TipsModule } from 'src/tips/tips.module';
import { FooterComponent } from 'src/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CarouselComponent,
    SpecialtyComponent,
    ContactUsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TipsModule  //module of componnent tips 1 2 3 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
