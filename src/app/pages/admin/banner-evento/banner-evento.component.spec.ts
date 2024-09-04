import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerEventoComponent } from './banner-evento.component';

describe('BannerEventoComponent', () => {
  let component: BannerEventoComponent;
  let fixture: ComponentFixture<BannerEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerEventoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
