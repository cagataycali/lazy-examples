# Lazy,

![](https://cagatay.js.org/lazy.png)

## AI chat bot service.

<p>Lazy allows you create awesome chat bot with no longer know ai!</p>
<p>Just teach lazy 4 your phase case!</p>
<p>Let him answer you instead!</p>

You can try in telegram already: Lets chat with @LazyAIBot, my Turkish friends already teached somethings like as greetings.
If you want host on your own, go ahead do this!

[Create telegram bot](https://core.telegram.org/bots#6-botfather)

[Telegram Bot Deploy](https://github.com/cagataycali/lazy-telegram):
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/cagataycali/lazy-telegram)

[Express HTTP Endpoint Deploy](https://github.com/cagataycali/lazy-telegram):
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/cagataycali/lazy-express)


---

### Node Usage

```bash
# Or npm install --save lazy.ai
$> yarn add lazy.ai
```

```javascript

const Lazy = require('lazy.ai');

async function start() {
  const lazy = new Lazy();

  // Learn ..
  await lazy.learn({phrase: 'hello', category: 'greetings'})
  await lazy.learn({phrase: 'hi', category: 'greetings'})
  await lazy.learn({phrase: 'Hello there!', category: 'greetings'})

  // Maybe add action ..
  await lazy.addAction({category: 'greetings', actions: 'http://localhost:3000/'})
  // Or add usual response ..
  await lazy.addResponse({category: 'greetings', response: 'Hi there!'})

  // Query.
  await lazy.query({phrase: "hello dude!"})

  // Helpers..
  await lazy.getResponses({category: 'greetings'})
  await lazy.getCategories()

}
// Dont forget start your function :)
start();

```

| File    | Contains     |
| :------------- | :------------- |
| learn.js       | Basic learning process.       |
| save.js       | Save trained data.       |
| loadTrainedData.js       | Load trained data.       |
| initial.js       | Shows initial options.       |
| helpers.js       | Shows helper actions.       |
