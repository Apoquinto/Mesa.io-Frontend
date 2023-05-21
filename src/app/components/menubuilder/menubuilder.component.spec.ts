import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubuilderComponent } from './menubuilder.component';

describe('MenubuilderComponent', () => {
  let component: MenubuilderComponent;
  let fixture: ComponentFixture<MenubuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenubuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
