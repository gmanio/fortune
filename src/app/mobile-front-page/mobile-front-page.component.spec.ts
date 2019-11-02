import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFrontPageComponent } from './mobile-front-page.component';

describe('MobileFrontPageComponent', () => {
  let component: MobileFrontPageComponent;
  let fixture: ComponentFixture<MobileFrontPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileFrontPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileFrontPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
