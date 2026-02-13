import arcjet, { shield, detectBot, slidingWindow } from '@arcjet/node';

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({ mode: 'LIVE' }),
    detectBot({
      mode: 'LIVE',
      allow: ['CATEGORY:SEARCH_ENGINE', 'CATEGORY:PREVIEW', 'CATEGORY:TOOL'],
    }),
    slidingWindow({
      mode: 'LIVE',
      interval: 60, // 1 minute
      max: 5,
    }),
  ],
});

export default aj;
