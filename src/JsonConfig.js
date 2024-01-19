const SERVER_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://winter-ten-calf.glitch.me';

export const JSON_SERVER = SERVER_URL;
