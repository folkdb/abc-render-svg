# @folkdb/abc-render-svg

*Render [ABC music notation](http://trillian.mit.edu/~jc/music/abc/doc/ABCprimer.html) to SVG in a Node environment*

## Install

```sh
npm i @folkdb/abc-render-svg

```

## Usage

This package is released as an ES module only. Minimum Node.js version is 12 (latest LTS as of release date). CommonJS `require()` is not supported.

```js

import abcRenderSvg from '@folkdb/abc-render-svg'

(async () => {
  const svg = await abcRenderSvg(`
    X:1
    T:Notes
    M:C
    L:1/4
    K:C
    c d e f|g a b c'|]
  `);
  
  // do something with SVG
})();
  

```

## API

The module's default export is a function with the following parameters:

```ts
function(content: string, options = {}): string

```

#### Required

- __content__: the ABC string to be rendered to SVG

#### Rendering Options

- __options__: additional [options](https://github.com/paulrosen/abcjs/blob/572dff9e70f9d46f60e7fad690bf714d1ca4d60b/docs/visual/render-abc-options.md) passed to the *abcjs* library's `renderAbc` function
