import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

});

describe('first test', () => {
  // tslint:disable-next-line:no-unused-expression
  it ('should be true'), () => {
    expect(true).toBe(true);
  };
  // tslint:disable-next-line:no-unused-expression
  it ('should be false'), () => {
    expect(false).toBe(false);
  };
});
