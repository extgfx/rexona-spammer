const wa = require('@open-wa/wa-automate');

wa.create().then(client => start(client));

function start(client) {
  client.onMessage(message => {
    const rand = Math.floor(Math.random() * (19377262 - 17390163 + 1)) + 17390163;
    client.sendText('6281319990822@c.us',`Rexona ${rand}`)
    console.log(`Rexona ${rand} Sent. Waiting for another..`)
  });
}