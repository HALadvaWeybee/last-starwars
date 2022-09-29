import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CherecterComponent } from './cherecter.component';

describe('CherecterComponent', () => {
  let component: CherecterComponent;
  let fixture: ComponentFixture<CherecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CherecterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CherecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
