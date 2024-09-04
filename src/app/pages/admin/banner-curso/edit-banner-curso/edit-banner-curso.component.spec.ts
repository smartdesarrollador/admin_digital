import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBannerCursoComponent } from './edit-banner-curso.component';

describe('EditBannerCursoComponent', () => {
  let component: EditBannerCursoComponent;
  let fixture: ComponentFixture<EditBannerCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBannerCursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBannerCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
