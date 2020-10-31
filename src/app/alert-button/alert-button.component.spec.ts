import { DebugElement } from '@angular/core';

import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AlertButtonComponent } from './alert-button.component';

describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertButtonComponent ]
    })
    .compileComponents(); // compiles template and css
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a message with "warn"', () => {
    expect(component.content).toContain('warn');
  });

  it('should have severity greater thant 2', () => {
    expect(component.severity).toBeGreaterThan(2);
  });

  it('should have an H1 tag of "Alert Button"', () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert Button');
  });

  it('should toggle the message boolean', () => {
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    expect(component.hideContent).toBeFalsy();
  });

  it('should toggle the message boolean asynchronously', fakeAsync(() => {
    expect(component.hideContent).toBeTruthy();
    component.toggleAsync();
    tick(500);
    expect(component.hideContent).toBeFalsy();
  }));
});
