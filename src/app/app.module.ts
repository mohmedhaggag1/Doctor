import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SpecialtyComponent } from '../specialty/specialty.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { SpecialycardComponent } from 'src/shared/specialycard/specialycard.component';
import { ScrolltopModule } from 'src/shared/scrolltop/scrolltop/scrolltop.module';
import { NavBarComponent } from 'src/components/nav-bar/nav-bar.component';
import { HomeComponent } from 'src/components/home/home.component';
import { CarouselComponent } from 'src/components/carousel/carousel.component';
import { TipsComponent } from 'src/components/tips/tips.component';
import { FooterComponent } from 'src/components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CarouselComponent,
    SpecialtyComponent,
    ContactUsComponent,
    FooterComponent,
    SpecialycardComponent,
    TipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ScrolltopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
