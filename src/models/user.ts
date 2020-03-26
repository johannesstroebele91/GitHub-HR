export class User {

  constructor(login: string, id: number, node_id: string,
              avatar_url: string, gravatar_id: string, url: string,
              html_url: string, followers_url: string, following_url: string,
              gists_url: string, starred_url: string, subscriptions_url: string,
              organizations_url: string, repos_url: string, events_url: string,
              received_events_url: string, type: string, site_admin: boolean,
              name: string, company: string, blog: string, location: string,
              email: null, hireable: null, bio: string, public_repos: number,
              public_gists: number, followers: number, following: number,
              created_at: string, updated_at: string) {

    this.login = login;
    this.id = id;
    this.node_id = node_id;
    this.avatar_url = avatar_url;
    this.gravatar_id = gravatar_id;
    this.url = url;
    this.html_url = html_url;
    this.followers_url = followers_url;
    this.following_url = following_url;
    this.gists_url = gists_url;
    this.starred_url = starred_url;
    this.subscriptions_url = subscriptions_url;
    this.organizations_url = organizations_url;
    this.repos_url = repos_url;
    this.events_url = events_url;
    this.received_events_url = received_events_url;
    this.type = type;
    this.site_admin = site_admin;
    this.name = name;
    this.company = company;
    this.blog = blog;
    this.location = location;
    this.email = email;
    this.hireable = hireable;
    this.bio = bio;
    this.public_repos = public_repos;
    this.public_gists = public_gists;
    this.followers = followers;
    this.following = following;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  login: string;
  id: number;
  node_id: string;
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
  company: string;
  blog: string;
  location: string;
  email: null;
  hireable: null;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}
