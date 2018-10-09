import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsXdComponent } from './what-is-xd.component';

describe('WhatIsXdComponent', () => {
  let component: WhatIsXdComponent;
  let fixture: ComponentFixture<WhatIsXdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsXdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsXdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
