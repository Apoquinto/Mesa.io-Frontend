import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuclientlistComponent } from './menuclientlist.component';

describe('MenuclientlistComponent', () => {
  let component: MenuclientlistComponent;
  let fixture: ComponentFixture<MenuclientlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuclientlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuclientlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
