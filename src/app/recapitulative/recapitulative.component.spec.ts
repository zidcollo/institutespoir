import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapitulativeComponent } from './recapitulative.component';

describe('RecapitulativeComponent', () => {
  let component: RecapitulativeComponent;
  let fixture: ComponentFixture<RecapitulativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapitulativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapitulativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
