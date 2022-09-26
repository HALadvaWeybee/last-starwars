import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CherectersComponent } from './cherecters.component';

describe('CherectersComponent', () => {
  let component: CherectersComponent;
  let fixture: ComponentFixture<CherectersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CherectersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CherectersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
