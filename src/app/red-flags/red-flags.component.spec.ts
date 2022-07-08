import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { RedFlagsComponent } from './red-flags.component';
import { red, white } from '../utils/contants';

describe('RedFlagsComponent', () => {
  let component: RedFlagsComponent;
  let fixture: ComponentFixture<RedFlagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedFlagsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should have card values', () => {
    expect(component.card1).not.toBeNull();
    expect(component.card2).not.toBeNull();
    expect(component.card3).not.toBeNull();
  });

  describe('pickRandom', () => {
    test('to be working', () => {
      let random = component.pickRandom(white);
      expect(random).not.toBeNull();
    });
  });

  describe('suffle', () => {
    test('to be working', () => {
      let card1 = component.card1;
      let card2 = component.card1;
      let card3 = component.card1;

      component.shuffle();

      expect(card1).not.toBe(component.card1);
      expect(card2).not.toBe(component.card2);
      expect(card3).not.toBe(component.card3);
    });

    test('click to be working', fakeAsync(() => {
      jest.spyOn(component, 'shuffle');
      let button = fixture.debugElement.nativeElement.querySelector('button');
      button.click();

      tick();

      expect(component.shuffle).toHaveBeenCalled();
    }));
  });
});
