import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardIndexComponent } from './dashboard-index/user-dashboard-index.component';
import { UserDashboardLayoutComponent } from './dashboard-layout/user-dashboard-layout.component';
import { UserDashboardOrderComponent } from './dashboard-order/user-dashboard-order.component';
import { UserDashboardProfileComponent } from './dashboard-profile/user-dashboard-profile.component';
import { UserDashboardSavedItemComponent } from './dashboard-saved-item/user-dashboard-saved-item.component';

const UserDashboardChildrenRoute: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserDashboardIndexComponent
  },
  {
    path: 'saved-items',
    component: UserDashboardSavedItemComponent
  },
  {
    path: 'profile',
    component: UserDashboardProfileComponent
  },
  {
    path: 'orders',
    component: UserDashboardOrderComponent
  }
];

const routes: Routes = [
  {
    path: '',
    component: UserDashboardLayoutComponent,
    children: UserDashboardChildrenRoute
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule {}
