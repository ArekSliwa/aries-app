import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatmaComponent } from './matma.component';

describe('MatmaComponent', () => {
  let component: MatmaComponent;
  let fixture: ComponentFixture<MatmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
