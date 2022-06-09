import { ProjectPage } from './pages/project/project.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './pages/main/main.page';
import { ProfilePage } from './pages/profile/profile.page';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { SearchPage } from './pages/search/search.page';
import { ProjectAdministrationPage } from './pages/project-administration/project-administration.page';

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
  },
  {
    path: 'projectadministration',
    component: ProjectAdministrationPage,
  },

  // TO DO: go to page based on the projectId perhaps
  // {
  //   path: 'project',
  //   component: ProjectPage,
  //   children: [
  //     { path: ':id', component: ProjectComponent },
  //     { path: 'administration', component: ProjectAdministrationComponent },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
