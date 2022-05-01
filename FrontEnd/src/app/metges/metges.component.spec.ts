import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetgesComponent } from './metges.component';

describe('MetgesComponent', () => {
  let component: MetgesComponent;
  let fixture: ComponentFixture<MetgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
