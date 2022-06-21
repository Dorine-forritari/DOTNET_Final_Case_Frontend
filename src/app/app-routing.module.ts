import { NewProjectPage } from './pages/new-project/new-project.page';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { ProfileSetupPage } from './pages/profile-setup/profile-setup.page';
import { ProjectAdministrationComponent } from './components/project-administration/project-administration.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectPage } from './pages/project/project.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from './pages/profile/profile.page';
import { ProfileEditPage } from './pages/profile-edit/profile-edit.page';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { SearchPage } from './pages/search/search.page';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/catalogue',
  },
  {
    path: 'main',
    component: CataloguePage,
  },
  {
    path: 'profile',
    component: ProfilePage,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile-edit',
    component: ProfileEditPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile-setup',
    component: ProfileSetupPage,
  },
  {
    path: 'search/:searchInput',
    component: SearchPage,
  },
  {
    path: 'search',
    pathMatch: 'full',
    redirectTo: '/catalogue',
  },
  {
    path: 'catalogue',
    component: CataloguePage,
  },
  {
    path: 'project/:id',
    component: ProjectPage,
    children: [
      {
        path: '',
        redirectTo: 'details',
        pathMatch: 'full',
      },
      {
        path: 'details',
        component: ProjectComponent,
      },
      {
        path: 'administration',
        canActivate: [AuthGuard],
        component: ProjectAdministrationComponent,
      },
    ],
  },
  {
    path: 'new-project',
    // canActivate: [AuthGuard],
    component: NewProjectPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
