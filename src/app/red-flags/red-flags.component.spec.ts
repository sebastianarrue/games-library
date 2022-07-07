import 'zone.js';
import 'zone.js/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

import { RedFlagsComponent } from './red-flags.component';

describe('RedFlagsComponent', () => {
  let component: RedFlagsComponent;
  let fixture: ComponentFixture<RedFlagsComponent>;

  beforeAll(async () => {
    await TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedFlagsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RedFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
