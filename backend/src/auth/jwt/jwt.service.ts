import * as jwt from 'jsonwebtoken';
import { Component } from '@nestjs/common';
import { ConfigService } from '../../common/config.service';
import { OAuthServices } from '../oauth-services.enum';

const VERSION = 1;

@Component()
export class JWTService {
  private readonly jwtSecret: string;

  constructor(configService: ConfigService) {
    this.jwtSecret = configService.config.auth.JWT.secret;
  }

  public sign(service: OAuthServices, id: number): string {
    const payload = {
      version: VERSION,
      service,
      id,
    };
    return jwt.sign(payload, this.jwtSecret);
  }

  public isValid(token: string): boolean {
    try {
      this.verify(token);
    }
    catch (e) {
      return false;
    }
    return true;
  }

  public verify(token: string): object {
    const payload = jwt.verify(token, this.jwtSecret);
    if (typeof payload === 'string') {
      throw new Error('JWT verify returned a string unexpectedly');
    }
    // TODO verify version
    return payload;
  }
}
