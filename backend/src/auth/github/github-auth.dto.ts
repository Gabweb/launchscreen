import { IsString, IsNotEmpty, Length } from '@nestjs/common/node_modules/class-validator';

export class GithubAuthParams {
    @IsString()
    @Length(5, 50) // TODO
    readonly code: string;

    @IsString()
    @Length(5, 50) // TODO
    readonly state: string;
}

export interface GithubAccessTokenResponse {
    access_token?: string;
    token_type?: string;
    scope?: string;
    error?: string;
    error_description?: string;
    error_uri?: string;
}

export interface GitHubUserProfile {
    login: string;
    id: number;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company?: any;
    blog: string;
    location?: any;
    email?: any;
    hireable?: any;
    bio?: any;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
}