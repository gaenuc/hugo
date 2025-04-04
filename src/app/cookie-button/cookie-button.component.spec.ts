import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieButtonComponent } from './cookie-button.component';

describe('CookieButtonComponent', () => {
  let component: CookieButtonComponent;
  let fixture: ComponentFixture<CookieButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookieButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookieButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
