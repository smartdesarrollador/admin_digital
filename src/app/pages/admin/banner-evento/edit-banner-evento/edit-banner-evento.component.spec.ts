import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBannerEventoComponent } from './edit-banner-evento.component';

describe('EditBannerEventoComponent', () => {
  let component: EditBannerEventoComponent;
  let fixture: ComponentFixture<EditBannerEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBannerEventoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBannerEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
