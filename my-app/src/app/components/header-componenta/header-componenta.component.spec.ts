import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponentaComponent } from './header-componenta.component';

describe('HeaderComponentaComponent', () => {
  let component: HeaderComponentaComponent;
  let fixture: ComponentFixture<HeaderComponentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
