import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { DataService } from '../services/data.service';

import { FirstComponent } from './first.component';
import { FirstService } from '../services/first.service';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges(); //if uncommented the spy won't work
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the user from the service', () => {
    fixture.detectChanges();
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
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Please');
  });

  //SPY
  it("should return 'fake data from spy' when the dataService returns the Promise", waitForAsync(() => {
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getData').and.returnValue(
      Promise.resolve('fake data from spy')
    );
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      //the expect in the case where it's about an async function has to go here
      expect(component.data).toBe('fake data from spy');
    });
  }));

  //SPY using fakeAsync() and Tick()
  it("should return 'fake data from spy using tick' when the dataService returns the Promise using fakeAsync", fakeAsync(() => {
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getData').and.returnValue(
      Promise.resolve('fake data from spy using tick')
    );
    fixture.detectChanges();
    tick(); //tick() is like "ok, now that everything is done execute the code below"
    expect(component.data).toBe('fake data from spy using tick');
  }));
});
