import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotDuDgComponent } from './mot-du-dg.component';

describe('MotDuDgComponent', () => {
  let component: MotDuDgComponent;
  let fixture: ComponentFixture<MotDuDgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotDuDgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotDuDgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
