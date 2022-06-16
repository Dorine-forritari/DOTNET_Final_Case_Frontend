import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { ProfilePage } from './pages/profile/profile.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfilecardComponent } from './components/profilecard/profilecard.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { ProjectComponent } from './components/project/project.component';
import { ProjectPage } from './pages/project/project.page';
import { ProjectHeaderComponent } from './components/project-header/project-header.component';
import { SearchPage } from './pages/search/search.page';
import { ProfileEditPage } from './pages/profile-edit/profile-edit.page';
import { ProfilecardEditComponent } from './components/profilecard-edit/profilecard-edit.component';
import { ProjectAdministrationComponent } from './components/project-administration/project-administration.component';
import { CatalogueProjectHeaderComponent } from './components/catalogue-project-header/catalogue-project-header.component';
import { ProjectImagesCarouselComponent } from './components/project-images-carousel/project-images-carousel.component';

// Auth0

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { ProfileSetupComponent } from './components/profile-setup/profile-setup.component';
import { ProfileSetupPage } from './pages/profile-setup/profile-setup.page';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
@NgModule({
  declarations: [
    AppComponent,
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
    ProfileEditPage,
    ProfilecardEditComponent,
    ProjectAdministrationComponent,
    CatalogueProjectHeaderComponent,
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,

    ProjectImagesCarouselComponent,
      ProfileSetupComponent,
      ProfileSetupPage,
      ProfileHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // 👇 add and initialize AuthModule
    AuthModule.forRoot({
      ...env.auth,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
