### What is a localStorage?

localStorage is a type of web storage that allows JavaScript sites and apps to store and access data right in the browser with no expiration date. This means the data stored in the browser will persist even after the browser window has been closed. The stored data is saved across browser sessions.

> Note: Data in a localStorage object created in a "private browsing" or "incognito" session is cleared when the last "private" tab is closed.

> Also note that localStorage can only store strings.

> To store arrays or objects, you would have to convert them to strings.

### Methods and Properties provided by Storage Object

  - setItem(key, value) – store key/value pair.
  - getItem(key) – get the value by key.
  - removeItem(key) – remove the key with its value.
  - clear() – delete everything.
  - key(index) – get the key on a given position.
  - length – the number of stored items.


### First: setItem()

Just as the name implies, this method allows you to store values in the localStorage object.

- It takes two parameters: a key and a value. 
- The key can be referenced later to fetch the value attached to it.
- To do this, we make use of the `JSON.stringify()` method, which converts a JSON string into a JavaScript object.

```js
localStorage.setItem("name", JSON.stringify(...))
```


### Second: getItem()

The getItem() method allows you to access the data stored in the browser’s localStorage object.

- It accepts only one parameter which is the key and returns the value as a string.
- This returns a string with value
- To use this value, you would have to convert it back to an object.
- To do this, we make use of the `JSON.parse()` method, which converts a JSON string into a JavaScript object.

```js
localStorage.getItem(key)
```


### Third: removeItem()

When passed a key name, the removeItem() method will remove that key from the storage if it exists. If there is no item associated with the given key, this method will do nothing.

```js
localStorage.removeItem(key)
```

### Advantages of localStorage

> There are many benefits to using localStorage. On top of the list is its ability to store data even after the browser is closed. 

#### The following is a list of some of its advantages:

- The data is stored using key-value pairs.
- The data stored does not expire.
- It holds information on the client side.
- Data is not automatically deleted unless Javascript code is used.
- Even after the browser is closed, it still keeps the data.
- With each HTTP request, sending data back and forth is unnecessary.
- It can store up to 5MB of data.
 
#### Disadvantages of localStorage

- Utilizing localStorage has several benefits, but it also has some drawbacks. Here are a few of them:
- It should not be used to store private and important information because it is susceptible to Cross-Site Scripting (XSS) attacks.
- It has no data protection, making it accessible with any code.
- It can only contain strings but can be serialized with JSON.stringify().
- It cannot be accessed from different domains or subdomains.