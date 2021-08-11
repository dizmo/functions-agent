[![NPM version](https://badge.fury.io/js/%40dizmo%2Ffunctions-agent.svg)](https://npmjs.org/package/@dizmo/functions-agent)
[![Build Status](https://travis-ci.com/dizmo/functions-agent.svg?branch=master)](https://travis-ci.com/dizmo/functions-agent)
[![Coverage Status](https://coveralls.io/repos/github/dizmo/functions-agent/badge.svg?branch=master)](https://coveralls.io/github/dizmo/functions-agent?branch=master)

# @dizmo/functions-agent

Safely checks the `navigator.userAgent` by matching it against a provided regular expression; returns either a `RegExpMatchArray` in case of a successful match or `null` otherwise.

## Usage

### Installation

```sh
npm install @dizmo/functions-agent --save
```

### Require

```javascript
const { agent } = require('@dizmo/functions-agent');
```

### Example(s)

```typescript
import { agent } from '@dizmo/functions-agent';
```

```typescript
if (agent(/chrome/i)) { .. }
```

## Development

### Clean

```sh
npm run clean
```

### Build

```sh
npm run build
```

#### without linting and cleaning:

```sh
npm run -- build --no-lint --no-clean
```

#### with UMD bundling (incl. minimization):

```sh
npm run -- build --prepack
```

#### with UMD bundling (excl. minimization):

```sh
npm run -- build --prepack --no-minify
```

### Lint

```sh
npm run lint
```

#### with auto-fixing:

```sh
npm run -- lint --fix
```

### Test

```sh
npm run test
```

#### without linting, cleaning and (re-)building:

```sh
npm run -- test --no-lint --no-clean --no-build
```

### Cover

```sh
npm run cover
```

#### without linting, cleaning and (re-)building:

```sh
npm run -- cover --no-lint --no-clean --no-build
```

## Debugging

Connect `@dizmo/functions-agent` to another project:

```sh
[@dizmo/functions-agent] $ npm link # symlink global:@dizmo/functions-agent
```

```sh
[a-project] $ npm link a-module # symlink node-modules:@dizmo/functions-agent
```

```sh
[a-project] $ head webpack.config.js # ensure @dizmo/functions-agent in entry.main
```

```
entry: {
    main: [..., '@dizmo/functions-agent', './source/index.js']
}
```

Disconnect `@dizmo/functions-agent` from the project:

```sh
[a-project] $ npm unlink @dizmo/functions-agent # delete local symlink
```

```sh
[@dizmo/functions-agent] $ npm uninstall -g # delete global symlink
```

## Documentation

```sh
npm run docs
```

## Publication

```sh
npm publish
```

#### initially (if public):

```sh
npm publish --access=public
```

## Copyright

 © 2021 [dizmo AG](https://dizmo.com/), Switzerland
