import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

import { UserLoginComponent } from './ui/users/user-login/user-login.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ContentComponent } from './ui/content/content.component';
import { MakePaymentComponent } from "./payments/make-payment/make-payment.component";
import { GoogleMapComponent } from "./geo/google-map/google-map.component";
import { RealtimeChartComponent } from "./charts/realtime-chart/realtime-chart.component";
import { ReducerComponent } from "./reducers/reducer.component";

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'login', component: UserLoginComponent, },
  { path: 'items', component: ItemsListComponent, canActivate: [AuthGuard] },
  { path: 'uploads', loadChildren: './uploads/shared/upload.module#UploadModule' },
  { path: 'payments', component: MakePaymentComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: GoogleMapComponent, canActivate: [AuthGuard]},
  { path: 'charts', component: RealtimeChartComponent, canActivate: [AuthGuard]},
  { path: 'reducer', component: ReducerComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class RoutingModule { }