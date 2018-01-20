import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveImagesComponent } from './approve-images.component';

describe('ApproveImagesComponent', () => {
  let component: ApproveImagesComponent;
  let fixture: ComponentFixture<ApproveImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
