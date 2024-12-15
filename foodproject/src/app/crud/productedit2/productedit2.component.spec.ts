import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productedit2Component } from './productedit2.component';

describe('Productedit2Component', () => {
  let component: Productedit2Component;
  let fixture: ComponentFixture<Productedit2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productedit2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productedit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
