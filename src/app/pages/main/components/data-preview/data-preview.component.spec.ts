import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPreviewComponent } from './data-preview.component';

describe('ChatPreviewComponent', () => {
  let component: DataPreviewComponent;
  let fixture: ComponentFixture<DataPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
