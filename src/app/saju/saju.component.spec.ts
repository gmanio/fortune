import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SajuComponent } from './saju.component';

describe('SajuComponent', () => {
  let component: SajuComponent;
  let fixture: ComponentFixture<SajuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SajuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SajuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
