import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationclientComponent } from './reservationclient.component';

describe('ReservationclientComponent', () => {
  let component: ReservationclientComponent;
  let fixture: ComponentFixture<ReservationclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
