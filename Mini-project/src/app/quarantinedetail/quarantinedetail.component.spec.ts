import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarantinedetailComponent } from './quarantinedetail.component';

describe('QuarantinedetailComponent', () => {
  let component: QuarantinedetailComponent;
  let fixture: ComponentFixture<QuarantinedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuarantinedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarantinedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
