const wa = require('@open-wa/wa-automate');

wa.create().then(client => start(client));

function start(client) {
  client.onMessage(message => {
    const rand = Math.floor(Math.random() * (119613999 - 119613000 + 1)) + 119613000;
    client.sendText('6281319990822@c.us',`Rexona ${rand}`)
    console.log(`Rexona ${rand} Sent. Waiting for another..`)
  });
}
