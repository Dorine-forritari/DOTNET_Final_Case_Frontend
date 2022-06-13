

// AUTH0
// src/environments/environment.ts
//import { domain, clientId } from '../../auth_config.json';

 let domain = "dev-z1itwbli.us.auth0.com";
 let clientId = "jsfth4hoASDSA5zotpEOmxj5HfgSm421";

export const environment = {
  production: false,
  mockProjectApiUrl: 'https://mocki.io/v1/960862b5-8cb7-4b4e-88da-1804a79d3ce5',
  mockUserApiUrl: 'https://mocki.io/v1/960862b5-8cb7-4b4e-88da-1804a79d3ce5',

  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
  },
};


