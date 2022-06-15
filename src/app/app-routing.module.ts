import { ProjectAdministrationComponent } from './components/project-administration/project-administration.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectPage } from './pages/project/project.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './pages/main/main.page';
import { ProfilePage } from './pages/profile/profile.page';
import { ProfileEditPage } from './pages/profile-edit/profile-edit.page';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { SearchPage } from './pages/search/search.page';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/main',
  },
  {
    path: 'main',
    component: MainPage,
  },
  {
    path: 'profile',
    component: ProfilePage,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile-edit',
    component: ProfileEditPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'search/:searchInput',
    component: SearchPage,
  },
  {
    path: 'search',
    pathMatch: 'full',
    redirectTo: '/main',
  },
  {
    path: 'catalogue',
    component: CataloguePage,
    canActivate: [AuthGuard]
  },
  {
    path: 'project/:id',
    component: ProjectPage,
    canActivate: [AuthGuard],
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
        component: ProjectAdministrationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
