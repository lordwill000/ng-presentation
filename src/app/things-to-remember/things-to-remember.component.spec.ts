import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsToRememberComponent } from './things-to-remember.component';

describe('ThingsToRememberComponent', () => {
  let component: ThingsToRememberComponent;
  let fixture: ComponentFixture<ThingsToRememberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingsToRememberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsToRememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
