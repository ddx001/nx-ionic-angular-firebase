import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private readonly appNameSignal = signal('appName');

  get appName(): Signal<string> {
    return this.appNameSignal.asReadonly();
  }

  setAppName(value: string) {
    this.appNameSignal.set(value);
  }
}
