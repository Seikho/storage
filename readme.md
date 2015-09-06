# Longshot Storage
A simple wrapper of browser localStorage with cookies fallback

### Installation

Using a module loader:
- Add `ls-storage.js` to your third-party libraries 
```javascript
var store = require("ls-storage");
store("myKey", { foo: "bar" });
// Returns undefined

store("myKey");
// Returns { foo: "bar" }

store("iDontExist");
// Returns undefined
``` 

### License
MIT