import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotothequeComponent } from './phototheque.component';

describe('PhotothequeComponent', () => {
  let component: PhotothequeComponent;
  let fixture: ComponentFixture<PhotothequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotothequeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotothequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
