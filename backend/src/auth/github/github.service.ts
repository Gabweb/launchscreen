import  request = require('superagent');
import { Component } from '@nestjs/common';
import { ConfigService } from '../../common/config.service';
import { GithubAuthParams, GithubAccessTokenResponse, GitHubUserProfile } from './github-auth.dto';

const GITHUB_AUTH_URL = 'https://github.com/login/oauth/access_token';
const GITHUB_PROFILE_URL = 'https://api.github.com/user';

@Component()
export class GithubService {
  private readonly config: any;

  constructor(configService: ConfigService) {
    this.config = configService.config;
  }

  async getAccessToken(query: GithubAuthParams): Promise<string> {
    const githubConfig = this.config.OAuth.GitHub;

    const response = await request.post(GITHUB_AUTH_URL)
      .send({
        client_id: githubConfig.id,
        client_secret: githubConfig.secret,
        code: query.code,
        state: query.state,
      })
      .accept('json');

    const body: GithubAccessTokenResponse = response.body;
    if (body.access_token !== undefined) {
      return body.access_token;
    }
    throw new Error(`${body.error}`);
  }

  async getProfile(accessToken: string): Promise<GitHubUserProfile> {
    const response = await request.get(GITHUB_PROFILE_URL)
    .set('Authorization', `token ${accessToken}`)
    .accept('json');
    return response.body;
  }
}
