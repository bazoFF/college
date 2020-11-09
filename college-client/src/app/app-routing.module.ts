import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {AdminPanelPageComponent} from './components/admin-panel-page/admin-panel-page.component';
import {AuthGuard} from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'admin',
    component: AdminPanelPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
