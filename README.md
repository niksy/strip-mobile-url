# strip-mobile-url

[![Build Status][ci-img]][ci]

Strip mobile URL parts and convert them to standard URLs.

## Install

```sh
npm install strip-mobile-url --save
```

## Usage

```js
const stripMobileUrl = require('strip-mobile-url');

console.log(stripMobileUrl('`https://mobile.twitter.com/niksy/status/766611665244782592?utm_campaign=RSS-Feedburner-All-Partial&utm_cid=RSS-Feedburner-All-Partial&utm_medium=feed&utm_source=feedly&utm_reader=feedly&z=last&m=middle&a=first&t=upper-middle#foo'));
// https://twitter.com/niksy/status/766611665244782592?a=first&m=middle&t=upper-middle&z=last#foo
```

## API

### stripMobileUrl(url)

Returns: `String`

#### url

Type: `String`

URL to process.

Following URLs are processed:

* `m.example.com`
* `mobile.example.com`
* `touch.example.com`

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[ci]: https://travis-ci.org/niksy/strip-mobile-url
[ci-img]: https://img.shields.io/travis/niksy/strip-mobile-url.svg
