import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  { path: '', component: HomeComponent },    
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'images', component: ImagesComponent },
  { path: '**', component: NotfoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ]

})
export class AppRoutingModule {}
