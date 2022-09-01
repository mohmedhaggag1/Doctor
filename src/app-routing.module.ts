import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo : 'home', pathMatch : 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-DrAya', component: HomeComponent },
  { path: 'contactUs', component: ContactUsComponent },
  {
    path:'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'tip',
    loadChildren: () => import('./tips/tips.module').then(m => m.TipsModule)
  },
];

@NgModule({
  imports: [
    
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
