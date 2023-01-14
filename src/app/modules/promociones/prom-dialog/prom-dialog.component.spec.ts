import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromDialogComponent } from './prom-dialog.component';

describe('PromDialogComponent', () => {
  let component: PromDialogComponent;
  let fixture: ComponentFixture<PromDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
