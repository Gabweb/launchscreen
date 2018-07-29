import { Component } from '@nestjs/common';

@Component()
export class ConfigService {
  private _config: object | undefined;

  get config(): any { // TODO
    return this._config;
  }

  public constructor() {
    this._config = require('../../config.json');
  }

}
