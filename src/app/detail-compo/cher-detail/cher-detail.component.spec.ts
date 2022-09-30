import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CherDetailComponent } from './cher-detail.component';

describe('CherDetailComponent', () => {
  let component: CherDetailComponent;
  let fixture: ComponentFixture<CherDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CherDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
