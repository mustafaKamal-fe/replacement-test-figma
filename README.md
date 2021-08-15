# Cards Tasks

## Get Started

> First clone the repository on your machine (Make sure YARN is installed first) and do the following:
> with Yarn
> `yarn`

Now wait for the installation to finish and then start the project local development with:
`yarn start`

> You can complete your tasks in the main page `/` or create a different page for each task. You also have a local server running for you that will return cards details to use.

### Example Fetching One Card `/card`:

```js
    // fetch one card object
    // you will find it at res.data.card
    fetch('/card').then((res) => {...}).catch((error) => {...})
```

### Example Fetching Many Cards `/cards`:

```js
   // fetch an array of cards
   // you will find it at res.cards
   fetch('/card').then((res) => {...}).catch((error) => {...})
```
