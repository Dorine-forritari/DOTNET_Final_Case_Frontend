import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPage } from './pages/main/main.page';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectIconComponent } from './components/catalogue/project-icon/project-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPage,
    CatalogueComponent,
    NavbarComponent,
    ProjectIconComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
