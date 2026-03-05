import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthChoice } from './auth-choice';

describe('AuthChoice', () => {
  let component: AuthChoice;
  let fixture: ComponentFixture<AuthChoice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthChoice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthChoice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
