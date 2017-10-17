import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingGuard } from './routing.guard';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomePageComponent, canActivate: [RoutingGuard] },
  { path: 'login', component: LoginComponent, canActivate: [RoutingGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: [],
  providers: [RoutingGuard]
})
export class RoutingModule { }
