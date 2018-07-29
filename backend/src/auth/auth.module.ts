import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { GithubController } from './github/github.controller';
import { GithubService } from './github/github.service';
import { JWTService } from './jwt/jwt.service';

@Module({
    controllers: [GithubController],
    imports: [CommonModule],
    components: [
        GithubService,
        JWTService,
    ],
})
export class AuthModule {}
