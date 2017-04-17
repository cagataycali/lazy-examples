const Lazy = require('lazy.ai');
const lazy = new Lazy();

async function start() {

  // Learn ..
  await lazy.learn({phrase: 'hello', category: 'greetings'})
  await lazy.learn({phrase: 'hi', category: 'greetings'})
  await lazy.learn({phrase: 'Hello there!', category: 'greetings'})

  // Add response ..
  await lazy.addResponse({category: 'greetings', response: 'Hi there!'})

  // Query.
  console.log(await lazy.query({phrase: "hello dude!"}));

  // Save trained data ..
  await lazy.save();
}

start();

/* Out:

{ status: true,
  possibility: 1,
  response: 'Hi there!',
  details: [ { label: 'greetings', value: 0.9301399572466547 } ] }
**/
