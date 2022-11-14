export const config = provider => ({
  client: {
    id: client[provider].id,
    secret: client[provider].secret
  },
  auth: {
    tokenHost: auth[provider].tokenHost,
    tokenPath: auth[provider].tokenPath,
    authorizePath: auth[provider].authorizePath
  }
});

const auth = {
  github: {
    tokenHost: "https://github.com",
    tokenPath: "/login/oauth/access_token",
    authorizePath: "/login/oauth/authorize"
  },
};

const client = {
  github: {
    id: "Iv1.d691d219bf204f5f",
    secret: "9527157b8b9b66807dc2b25ef3cd643f990255c1"
  }
};
