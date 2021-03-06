import { Injectable } from '@angular/core';
import { Observable ,  Subject ,  merge } from 'rxjs';
import { MediaMatcher, BreakpointObserver } from '@angular/cdk/layout';
import { DeviceClass } from './device-class.enum';

const SMARTPHONE = '(max-width: 480px)';
const TABLET = '(max-width: 768px)';
const LAPTOP = '(max-width: 1200px)';

@Injectable()
export class BreakpointService {
  private _mobile = new Subject<any>();
  private _tablet = new Subject<any>();
  private _laptop = new Subject<any>();
  private _desktop = new Subject<any>();

  constructor(mediaMatcher: MediaMatcher, private readonly breakpointObserver: BreakpointObserver) {
    this.subscribeToMediaMatcher(mediaMatcher);
  }

  get $enteredMobile(): Observable<any> {
    return this._mobile.asObservable();
  }

  get $enteredTablet(): Observable<any> {
    return this._tablet.asObservable();
  }

  get $enteredLaptop(): Observable<any> {
    return this._laptop.asObservable();
  }

  get $enteredDesktop(): Observable<any> {
    return this._desktop.asObservable();
  }

  get $breakpointReached(): Observable<any> {
    const allObservables = merge(
      this._mobile.asObservable(),
      this._tablet.asObservable(),
      this._laptop.asObservable(),
      this._desktop.asObservable(),
    );
    return allObservables;
  }

  public getCurrentDeviceClass(): DeviceClass {
    if (this.breakpointObserver.isMatched(SMARTPHONE)) {
      return DeviceClass.Smartphone;
    }
    if (this.breakpointObserver.isMatched(TABLET)) {
      return DeviceClass.Tablet;
    }
    if (this.breakpointObserver.isMatched(LAPTOP)) {
      return DeviceClass.Laptop;
    }
    return DeviceClass.Desktop;
  }

  private createListener(matchingSubject: Subject<any>, otherSubject: Subject<any>) {
    return function(this: MediaQueryList) {
      if (this.matches) {
        matchingSubject.next();
      } else {
        otherSubject.next();
      }
    }
  }

  private subscribeToMediaMatcher(mediaMatcher: MediaMatcher) {
    const mediaQueryList = mediaMatcher.matchMedia(SMARTPHONE);
    mediaQueryList.addListener(this.createListener(this._mobile, this._tablet));
    const mediaQueryList2 = mediaMatcher.matchMedia(TABLET);
    mediaQueryList2.addListener(this.createListener(this._tablet, this._laptop));
    const mediaQueryList3 = mediaMatcher.matchMedia(LAPTOP);
    mediaQueryList3.addListener(this.createListener(this._laptop, this._desktop));
  }
}
