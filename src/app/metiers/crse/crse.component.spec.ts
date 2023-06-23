import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrseComponent } from './crse.component';

describe('CrseComponent', () => {
  let component: CrseComponent;
  let fixture: ComponentFixture<CrseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
