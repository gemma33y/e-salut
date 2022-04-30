import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordatorisComponent } from './recordatoris.component';

describe('RecordatorisComponent', () => {
  let component: RecordatorisComponent;
  let fixture: ComponentFixture<RecordatorisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordatorisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordatorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
