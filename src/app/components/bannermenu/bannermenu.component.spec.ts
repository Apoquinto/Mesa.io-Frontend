import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannermenuComponent } from './bannermenu.component';

describe('BannermenuComponent', () => {
  let component: BannermenuComponent;
  let fixture: ComponentFixture<BannermenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannermenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
