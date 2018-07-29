import { Module, Global, NestModule, MiddlewaresConsumer } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { CorsMiddleware } from './common/cors.middleware';
import { GithubController } from './auth/github/github.controller';

@Module({
  imports: [AuthModule, CommonModule],
  controllers: [],
  components: [],
  exports: [],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(CorsMiddleware).forRoutes(GithubController);
  }
}
