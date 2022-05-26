import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardiandetailComponent } from './guardiandetail.component';

describe('GuardiandetailComponent', () => {
  let component: GuardiandetailComponent;
  let fixture: ComponentFixture<GuardiandetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardiandetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardiandetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
