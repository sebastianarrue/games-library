import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamesListComponent } from './games-list.component';

describe('GamesListComponent', () => {
  let component: GamesListComponent;
  let fixture: ComponentFixture<GamesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show "games-list works!', () => {
    const compiled = fixture.debugElement.nativeElement;
    const h1 = compiled.querySelector('p');
    expect(h1.textContent).toContain('games-list works!');
  });
});
