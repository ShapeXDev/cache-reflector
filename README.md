# Cacher | JavaScript.

### New | info.

```js
const { Cacher } = require('cache-reflector');
const cache = new Cacher();

cache.add('name', 'Jhon');

console.log(cache.get('name'));
```

### Editing | Deleting.

```js
const { Cacher } = require('cache-reflector');
const cache = new Cacher();

cache.set('name', 'Ruby');

cache.delete('name');
```

### Cache cleaner.

```js
const { Cacher } = require('cache-reflector');
const cache = new Cacher();

for (let i = 1; i < 50; i++) {
	cache.add(`${i}`, `Jhon ${i}`);
}

console.log(cache); // => Cacher { cachedObject: { '1': 'Jhon 1'... } }

cache.setLimit(50, 10000); // Cleaned last element after 10K ms

setTimeout(() => {
	console.log(cache); // => From 1 to 49;
}, 10000);

cache.setCleanTime(1000);
```

## Installation.

```
$ npm i cache-reflector
```