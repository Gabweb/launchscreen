import { Injectable } from '@angular/core';
import { Uri } from './uri';

@Injectable()
export class UrisService {
  private demoUris:Uri[] = [];

  constructor() {
    let demo = new Uri();
    demo.name = 'ComputerBase';
    demo.uri = 'https://www.computerbase.de/';
    demo.image = 'https://www.computerbase.de/img/logo.svg';
    demo.color = '2c5b9c';
    this.demoUris.push(demo);

    demo = new Uri();
    demo.name = 'Heise';
    demo.uri = 'https://www.heise.de/';
    demo.image = 'https://www.heise.de/imgs/18/1/7/9/4/8/9/1/Heise-Keks_gross-dea1c07e481ff866.jpeg';
    demo.color = 'fff';
    this.demoUris.push(demo);

    demo = new Uri();
    demo.name = 'YouTube';
    demo.uri = 'https://www.youtube.com/';
    demo.image = 'https://www.riot-os.org/images/youtube-logo-light.png';
    demo.color = 'FF0000';
    this.demoUris.push(demo);

  }

  public getUris():Uri[] {
    return this.demoUris;
  }

  public deleteUri(uri: Uri):boolean {
    let index = this.demoUris.indexOf(uri, 0);
    if (index === -1) {
      return false;
    }
    this.demoUris.splice(index, 1);
    return true;
  }

}
