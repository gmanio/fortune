import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopFrontPageComponent } from './desktop-front-page.component';

describe('DesktopFrontPageComponent', () => {
  let component: DesktopFrontPageComponent;
  let fixture: ComponentFixture<DesktopFrontPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopFrontPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopFrontPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
