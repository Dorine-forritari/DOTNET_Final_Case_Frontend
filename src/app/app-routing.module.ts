import { ProjectAdministrationComponent } from './components/project-administration/project-administration.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectPage } from './pages/project/project.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './pages/main/main.page';
import { ProfilePage } from './pages/profile/profile.page';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { SearchPage } from './pages/search/search.page';

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
    path: 'project',
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
  // {
  //   path: 'projectadministration/:id',
  //   component: ProjectAdministrationPage,
  // },

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
