import { ProjectAdministrationComponent } from './components/project-administration/project-administration.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectPage } from './pages/project/project.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from './pages/profile/profile.page';
import { ProfileEditPage } from './pages/profile-edit/profile-edit.page';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { SearchPage } from './pages/search/search.page';

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
  },
  {
    path: 'profile-edit',
    component: ProfileEditPage,
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
        component: ProjectAdministrationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
