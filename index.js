if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const { Autohook } = require('twitter-autohook');

(async ƛ => {
  const webhook = new Autohook();
  
  // Removes existing webhooks
  await webhook.removeWebhooks();
  
  // Listens to incoming activity
  webhook.on('event', event => console.log('Something happened:', event));
  
  // Starts a server and adds a new webhook
  await webhook.start();
  
  // Subscribes to a user's activity
  await webhook.subscribe({ oauth_token: process.env.TWITTER_ACCESS_TOKEN, oauth_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET });
})();