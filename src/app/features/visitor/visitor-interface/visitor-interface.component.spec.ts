import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorInterfaceComponent } from './visitor-interface.component';

describe('VisitorInterfaceComponent', () => {
  let component: VisitorInterfaceComponent;
  let fixture: ComponentFixture<VisitorInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VisitorInterfaceComponent]
    });
    fixture = TestBed.createComponent(VisitorInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
