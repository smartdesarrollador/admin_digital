import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBannerEspecialidadComponent } from './edit-banner-especialidad.component';

describe('EditBannerEspecialidadComponent', () => {
  let component: EditBannerEspecialidadComponent;
  let fixture: ComponentFixture<EditBannerEspecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBannerEspecialidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBannerEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
