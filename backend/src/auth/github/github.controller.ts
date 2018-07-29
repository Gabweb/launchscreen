import { Controller, Post, Query, BadRequestException } from '@nestjs/common';
import { GithubService } from './github.service';
import { GithubAuthParams } from './github-auth.dto';
import { JWTService } from '../jwt/jwt.service';
import { OAuthServices } from '../oauth-services.enum';

@Controller('auth/github')
export class GithubController {
  constructor(
    private githubService: GithubService,
    private jwtService: JWTService,
  ) {}

  @Post()
  async findAll(@Query() query: GithubAuthParams): Promise<any> {
    let accessToken: string;
    try {
      accessToken = await this.githubService.getAccessToken(query);
    }
    catch (e) {
      throw new BadRequestException(`${e}`);
    }

    const userProfile = await this.githubService.getProfile(accessToken);
    const jwt = this.jwtService.sign(OAuthServices.Github, userProfile.id);

    return jwt;
  }
}
