const Lazy = require('lazy.ai');
const lazy = new Lazy();

async function start() {
  // Learn ..
  await lazy.learn({phrase: 'hello', category: 'greetings'})
  await lazy.learn({phrase: 'hi', category: 'greetings'})
  await lazy.learn({phrase: 'Hello there!', category: 'greetings'})

  // Maybe add action ..
  await lazy.addAction({category: 'greetings', actions: 'http://localhost:3000/'})
  // Or add usual response ..
  await lazy.addResponse({category: 'greetings', response: 'Hi there!'})

  // Query.
  console.log(await lazy.query({phrase: "hello dude!"}));

  // Helpers..
  console.log(await lazy.getResponses({category: 'greetings'}));
  console.log(await lazy.getActions({category: 'greetings'}));
  console.log(await lazy.getCategories());
  // await lazy.save();
}

start();

/* Out:

{ status: true,
  possibility: 1,
  response: 'Hi there!',
  details: [ { label: 'greetings', value: 0.9314030367249095 } ] }
[ 'Hi there!', 'Hi there!', 'Hi there!' ]
[ 'http://localhost:3000/' ]
[ { name: 'greetings',
    responses: [ 'Hi there!', 'Hi there!', 'Hi there!' ],
    actions: [ 'http://localhost:3000/' ],
    _id: 'Q1moi9410u6Tfcae' } ]
*/
