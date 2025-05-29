import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductManagementComponent } from './components/product-management/product-management.component';

const routes: Routes = [
  { component: LoginComponent, path: 'login' },
  { component: HomeComponent, path: 'home' },
  { component: ProductManagementComponent, path: 'products' },

  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
