import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../app/modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
