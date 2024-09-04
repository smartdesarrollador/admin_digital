import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerEspecialidadComponent } from './banner-especialidad.component';

describe('BannerEspecialidadComponent', () => {
  let component: BannerEspecialidadComponent;
  let fixture: ComponentFixture<BannerEspecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerEspecialidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
