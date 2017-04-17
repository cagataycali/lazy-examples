const Lazy = require('lazy.ai');
const lazy = new Lazy();

async function start() {
  // Load Trained Data ..
  await lazy.loadTrainedData();

  // Query.
  console.log(await lazy.query({phrase: "hello dude!"}));
}

start();

/* Out:

{ status: true,
  possibility: 1,
  response: 'Hi there!',
  details: [ { label: 'greetings', value: 0.9301399572466547 } ] }
**/
