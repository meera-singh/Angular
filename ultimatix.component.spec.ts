import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimatixComponent } from './ultimatix.component';

describe('UltimatixComponent', () => {
  let component: UltimatixComponent;
  let fixture: ComponentFixture<UltimatixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimatixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimatixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
