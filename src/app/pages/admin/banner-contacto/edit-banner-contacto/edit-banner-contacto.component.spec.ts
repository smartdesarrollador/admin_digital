import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBannerContactoComponent } from './edit-banner-contacto.component';

describe('EditBannerContactoComponent', () => {
  let component: EditBannerContactoComponent;
  let fixture: ComponentFixture<EditBannerContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBannerContactoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBannerContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
