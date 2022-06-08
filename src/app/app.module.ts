import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPage } from './pages/main/main.page';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { ProfilePage } from './pages/profile/profile.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfilecardComponent } from './components/profilecard/profilecard.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { ProjectComponent } from './components/project/project.component';
import { ProjectPage } from './pages/project/project.page';
import { ProjectHeaderComponent } from './components/project-header/project-header.component';
import { SearchPage } from './pages/search/search.page';

@NgModule({
  declarations: [
    AppComponent,
    MainPage,
    CatalogueComponent,
    ProfilePage,
    NavbarComponent,
    ProfilecardComponent,
    SearchbarComponent,
    CataloguePage,
    ProjectComponent,
    ProjectPage,
    ProjectHeaderComponent,
    SearchPage,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
