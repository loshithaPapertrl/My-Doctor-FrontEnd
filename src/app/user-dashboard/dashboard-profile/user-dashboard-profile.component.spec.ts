import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardProfileComponent } from './user-dashboard-profile.component';

describe('DashboardProfileComponent', () => {
  let component: UserDashboardProfileComponent;
  let fixture: ComponentFixture<UserDashboardProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
