import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './pages/main/main.page';
import { CataloguePage } from './pages/catalogue/catalogue.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/main',
  },
  {
    path: "main",
    component: MainPage
  },
  { 
    path: "search/:searchInput",
    component: MainPage
  },
  {
    path: 'catalogue',
    component: CataloguePage,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
