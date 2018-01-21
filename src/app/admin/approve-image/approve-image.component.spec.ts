import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveImageComponent } from './approve-image.component';

describe('ApproveImageComponent', () => {
  let component: ApproveImageComponent;
  let fixture: ComponentFixture<ApproveImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
