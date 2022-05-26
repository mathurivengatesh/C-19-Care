import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InchargedetailComponent } from './inchargedetail.component';

describe('InchargedetailComponent', () => {
  let component: InchargedetailComponent;
  let fixture: ComponentFixture<InchargedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InchargedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InchargedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
