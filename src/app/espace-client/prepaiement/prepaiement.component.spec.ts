import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaiementComponent } from './prepaiement.component';

describe('PrepaiementComponent', () => {
  let component: PrepaiementComponent;
  let fixture: ComponentFixture<PrepaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepaiementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrepaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
