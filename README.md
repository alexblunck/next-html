# Next.js + Html

Import `.html` files as strings in your Next.js project

## Installation

```
npm install --save @blunck/next-html
```

## Usage

Create a `next.config.js` in your project

```js
// next.config.js
const withHtml = require('@blunck/next-html')()
module.exports = withHtml()
```

You can now import `.html` files as strings

```js
import foo from './foo.html'

export default () => <div dangerouslySetInnerHTML={{ __html: foo }} />
```

### With `html-loader` options

Optionally you can provide [html-loader](https://github.com/webpack-contrib/html-loader) options

```js
// next.config.js
const withHtml = require('@blunck/next-html')({
    minimize: true,
    conservativeCollapse: false
})
module.exports = withHtml()
```

### Configuring Next.js

Optionally you can add your custom Next.js configuration as parameter

```js
// next.config.js
const withHtml = require('@blunck/next-html')()
module.exports = withHtml({
    webpack(config, options) {
        return config
    }
})
```
