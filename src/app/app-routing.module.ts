import { NgModule } from '@angular/core';
import {
  NoPreloading,
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';

import { HomeComponent } from './home/home.component';
//import { AuthGuard } from './shared/guards/auth.guard';
import { AuthGuard } from '@auth0/auth0-angular';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { preload: true },
  },
  {
    path: 'courses',
    canActivate: [AuthGuard],

    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
  },

  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
