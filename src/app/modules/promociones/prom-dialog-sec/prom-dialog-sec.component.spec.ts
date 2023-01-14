import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromDialogSecComponent } from './prom-dialog-sec.component';

describe('PromDialogSecComponent', () => {
  let component: PromDialogSecComponent;
  let fixture: ComponentFixture<PromDialogSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromDialogSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromDialogSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
