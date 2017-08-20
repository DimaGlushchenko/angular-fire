import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './ui/content/content.component';
import { AuthGuard } from './core/auth.guard';

import { UserLoginComponent } from './ui/users/user-login/user-login.component';
import { ItemsListComponent } from './items/items-list/items-list.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'login', component: UserLoginComponent, },
  { path: 'items', component: ItemsListComponent, canActivate: [AuthGuard]},
  { path: 'uploads', loadChildren: './uploads/shared/upload.module#UploadModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RoutingModule { }