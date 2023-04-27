import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFirstPageComponent } from './admin-first-page.component';

describe('AdminFirstPageComponent', () => {
  let component: AdminFirstPageComponent;
  let fixture: ComponentFixture<AdminFirstPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFirstPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
