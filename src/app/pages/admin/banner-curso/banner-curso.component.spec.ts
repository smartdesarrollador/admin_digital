import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCursoComponent } from './banner-curso.component';

describe('BannerCursoComponent', () => {
  let component: BannerCursoComponent;
  let fixture: ComponentFixture<BannerCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerCursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
