const Lazy = require('lazy.ai');

/*
  selfTrain:
    Lazy learn questions if possible by default.
    But if don't want lazy learns without permission, you have to disable.
*/

const options = {
  db: 'data', // Data export prefix.
  selfTrain: false, // Self train option.
  slient: false, // Lazy slient option.
}

const lazy = new Lazy(options);

async function start() {

  // Learn ..
  await lazy.learn({phrase: 'hello', category: 'greetings'})
  await lazy.learn({phrase: 'hi', category: 'greetings'})
  await lazy.learn({phrase: 'Hello there!', category: 'greetings'})

  // Add response ..
  await lazy.addResponse({category: 'greetings', response: 'Hi there!'})

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
