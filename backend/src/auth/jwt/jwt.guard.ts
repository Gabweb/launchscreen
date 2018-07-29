import { Guard, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';

@Guard()
export class JWTGuard implements CanActivate {
  canActivate(req: Request, context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

    return true;
  }
}
