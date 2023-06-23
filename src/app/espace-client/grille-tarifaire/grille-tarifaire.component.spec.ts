import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrilleTarifaireComponent } from './grille-tarifaire.component';

describe('GrilleTarifaireComponent', () => {
  let component: GrilleTarifaireComponent;
  let fixture: ComponentFixture<GrilleTarifaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrilleTarifaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrilleTarifaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
