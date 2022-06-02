import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { MainPage } from './pages/main/main.page';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/main"
  },
  {
    path: "main",
    component: MainPage
  },
  { 
    path: "search/:searchInput",
    component: CatalogueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
