import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenRowComponent } from './resumen-row.component';

describe('ResumenRowComponent', () => {
  let component: ResumenRowComponent;
  let fixture: ComponentFixture<ResumenRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumenRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
