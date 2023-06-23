import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauxComponent } from './nouveaux.component';

describe('NouveauxComponent', () => {
  let component: NouveauxComponent;
  let fixture: ComponentFixture<NouveauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
