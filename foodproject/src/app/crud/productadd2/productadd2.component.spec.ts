import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productadd2Component } from './productadd2.component';

describe('Productadd2Component', () => {
  let component: Productadd2Component;
  let fixture: ComponentFixture<Productadd2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productadd2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productadd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
