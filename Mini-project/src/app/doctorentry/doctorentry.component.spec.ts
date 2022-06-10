import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorentryComponent } from './doctorentry.component';

describe('DoctorentryComponent', () => {
  let component: DoctorentryComponent;
  let fixture: ComponentFixture<DoctorentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
