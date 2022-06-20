// AUTH0
// src/environments/environment.ts
//import { domain, clientId } from '../../auth_config.json';

let domain = 'dev-z1itwbli.us.auth0.com';
let clientId = 'jsfth4hoASDSA5zotpEOmxj5HfgSm421';

export const environment = {
  production: false,
  mockProjectApiUrl: 'https://mocki.io/v1/960862b5-8cb7-4b4e-88da-1804a79d3ce5',
  mockUserApiUrl: 'https://mocki.io/v1/5337f6d3-2da2-4611-bad3-3807c7108681',
  usersApiUrl: 'https://finalcase.azurewebsites.net/api/users',
  messagesApiUrl: 'https://finalcase.azurewebsites.net/api/messages',
  projectsApiUrl: 'https://finalcase.azurewebsites.net/api/projects',
  projectUserApiUrl: 'https://finalcase.azurewebsites.net/api/projectusers',
  skillProjectsApiUrl: 'https://finalcase.azurewebsites.net/api/skillprojects',
  skillsApiUrl: 'https://finalcase.azurewebsites.net/api/skills',
  apiKey: '',

  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
  },
};
