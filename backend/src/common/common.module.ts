import { Module, SingleScope } from '@nestjs/common';
import { ConfigService } from './config.service';
import { CorsMiddleware } from './cors.middleware';

@Module({
  components: [ConfigService, CorsMiddleware],
  exports: [ConfigService, CorsMiddleware],
})
export class CommonModule {}
