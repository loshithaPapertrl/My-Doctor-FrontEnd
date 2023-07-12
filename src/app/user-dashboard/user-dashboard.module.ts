import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardLayoutComponent } from './dashboard-layout/user-dashboard-layout.component';
import { UserDashboardIndexComponent } from './dashboard-index/user-dashboard-index.component';
import { SharedModule } from '../shared/shared.module';
import { UserDashboardSavedItemComponent } from './dashboard-saved-item/user-dashboard-saved-item.component';
import { UserDashboardProfileComponent } from './dashboard-profile/user-dashboard-profile.component';
import { UserDashboardOrderComponent } from './dashboard-order/user-dashboard-order.component';

@NgModule({
  declarations: [
    UserDashboardLayoutComponent,
    UserDashboardIndexComponent,
    UserDashboardSavedItemComponent,
    UserDashboardProfileComponent,
    UserDashboardOrderComponent
  ],
  imports: [CommonModule, UserDashboardRoutingModule, SharedModule, MatMenuModule]
})
export class UserDashboardModule {}
