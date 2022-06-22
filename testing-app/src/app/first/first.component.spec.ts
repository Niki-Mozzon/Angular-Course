import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent } from './first.component';
import { FirstService } from './first.service';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the user from the service', () => {
    let firstService = fixture.debugElement.injector.get(FirstService);
    expect(component.user?.name).toEqual(firstService.user.name);
  });

  it('should display the name if logged in', () => {
    let compiled = fixture.debugElement.nativeElement;
    component.isLoggedIn = true;
    fixture.detectChanges(); //you must put detectChanges() after each change
    expect(compiled.querySelector('p').textContent).toContain(
      component.user?.name
    );
  });

  it('should ask to log in if logged out', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Please');
  });
});
