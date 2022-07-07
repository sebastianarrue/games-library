import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedFlagsComponent } from './red-flags.component';

describe('RedFlagsComponent', () => {
  let component: RedFlagsComponent;
  let fixture: ComponentFixture<RedFlagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedFlagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
