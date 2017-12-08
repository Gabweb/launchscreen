import { Injectable } from '@angular/core';
import { Uri } from './uri';

@Injectable()
export class UrisService {
  private demoUris:Uri[] = [];

  constructor() {
    for(let i = 0; i < 6; i++) {
      let demo = new Uri();
      demo.name = `Test${i}`;
      this.demoUris.push(demo);
    }
  }

  public getUris():Uri[] {
    return this.demoUris;
  }

}
