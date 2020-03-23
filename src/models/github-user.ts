export class User {

  constructor(login: string, id: number, nodeId: string, avatarUrl: string,
              gravatarId: string, url: string, htmlUrl: string, followersUrl: string,
              followingUrl: string, gistsUrl: string, starredUrl: string,
              subscriptionsUrl: string, organizationsUrl: string, reposUrl: string,
              eventsUrl: string, receivedEventsUrl: string, type: string, siteAdmin: boolean) {
    this.login = login;
    this.id = id;
    this.nodeId = nodeId;
    this.avatarUrl = avatarUrl;
    this.gravatarId = gravatarId;
    this.url = url;
    this.htmlUrl = htmlUrl;
    this.followersUrl = followersUrl;
    this.followingUrl = followingUrl;
    this.gistsUrl = gistsUrl;
    this.starredUrl = starredUrl;
    this.subscriptionsUrl = subscriptionsUrl;
    this.organizationsUrl = organizationsUrl;
    this.reposUrl = reposUrl;
    this.eventsUrl = eventsUrl;
    this.receivedEventsUrl = receivedEventsUrl;
    this.type = type;
    this.siteAdmin = siteAdmin;
  }

  login: string;
  id: number;
  nodeId: string;
  avatarUrl: string;
  gravatarId: string;
  url: string;
  htmlUrl: string;
  followersUrl: string;
  followingUrl: string;
  gistsUrl: string;
  starredUrl: string;
  subscriptionsUrl: string;
  organizationsUrl: string;
  reposUrl: string;
  eventsUrl: string;
  receivedEventsUrl: string;
  type: string;
  siteAdmin: boolean;
}
