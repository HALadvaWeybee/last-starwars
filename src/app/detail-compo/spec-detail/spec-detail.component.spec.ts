import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecDetailComponent } from './spec-detail.component';

describe('SpecDetailComponent', () => {
  let component: SpecDetailComponent;
  let fixture: ComponentFixture<SpecDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
