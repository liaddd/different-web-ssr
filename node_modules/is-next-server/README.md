#### Check if next.js is running on server or client.

#### usage:

```javascript

const isServer = require("is-next-server");

export default () => (
  if (isServer) {
    // server code.
  } else {
    // browser code.
  }
)
```
