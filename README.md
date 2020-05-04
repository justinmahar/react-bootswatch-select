<h2 align="center">
  <a href="https://github.com/devboldly/react-bootswatch-select">React Bootswatch Select</a>
</h2>
<h3 align="center">
  Bootswatch theme selector component for React.<br/>Try Bootswatch themes on your Bootstrap site with one line!
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-bootswatch-select">
    <img src="https://badge.fury.io/js/react-bootswatch-select.svg" alt="npm Version"/>
  </a>
  <a href="https://github.com/devboldly/react-bootswatch-select/actions?query=workflow%3ATests">
    <img src="https://github.com/devboldly/react-bootswatch-select/workflows/Tests/badge.svg" alt="Tests Status"/>
  </a>
  <a href="https://github.com/devboldly/react-bootswatch-select/actions?query=workflow%3ADeploy">
    <img src="https://github.com/devboldly/react-bootswatch-select/workflows/Deploy/badge.svg" alt="Deploy Status"/>
  </a>
</p>

## Documentation

Read the **[official documentation](https://devboldly.github.io/react-bootswatch-select/)**.

<a href="https://devboldly.github.io/react-bootswatch-select-demo/" target="_blank" rel="noopener noreferrer"><img src="./src/__docz__/images/demo.gif" /></a>

👁️ **[Live Demo](https://devboldly.github.io/react-bootswatch-select-demo/)**

## Overview

Drop a [Bootswatch](https://bootswatch.com/) theme selector onto your React site with just one line!

This package includes three components:

- [BootswatchSelect](https://devboldly.github.io/react-bootswatch-select/BootswatchSelect) - A Bootswatch theme selector that supports three modes: visible, hidden, and display-only.
- [Bootstrap](https://devboldly.github.io/react-bootswatch-select/Bootstrap) - A component for easily adding Bootstrap to your site, for convenience.
- [FontAwesome](https://devboldly.github.io/react-bootswatch-select/FontAwesome) - A component for easily adding Font Awesome to your site, for convenience.

By default, all CSS is loaded from [bootstrapcdn.com](https://www.bootstrapcdn.com/).

### Features include:

- **🎨 Easily try Bootswatch themes**
  - Want to quickly skin your Bootstrap site? Drop this component in and try out Bootswatch with one line!
- **🌠 Build beautiful prototypes quickly**
  - Quickly swatch out your next big project so you can focus on the stuff that matters.
- **🎛️ Visible, hidden, and display-only modes**
  - Several modes for the level of integration that suits you.
- **🎁 Quickly drop in [Bootstrap](https://devboldly.github.io/react-bootswatch-select/Bootstrap) and [Font Awesome](https://devboldly.github.io/react-bootswatch-select/FontAwesome)**
  - For convenience, Bootstrap and Font Awesome CDN components are included to get you up and running fast.

## Installation

```
npm i react-bootswatch-select
```

## Quick Start

If Bootstrap is loaded already:

#### Selector Visible

```jsx
import { BootswatchSelect } from 'react-bootswatch-select';
...
<BootswatchSelect version={'4.4.1'} className="form-control" />
```

This `select` will dynamically add the theme CSS link in the `head` when a Bootswatch style is selected.

#### Selector Hidden

```jsx
import { BootswatchSelect } from 'react-bootswatch-select';
...
<BootswatchSelect version={'4.4.1'} selectedThemeName="cerulean" selectorHidden />
```

This will add the Bootswatch CSS theme selected in the `head` and not render the `select` on the page.

#### Display-Only (No Head Link)

```jsx
import { BootswatchSelect } from 'react-bootswatch-select';
...
<BootswatchSelect className="form-control" disableHeadLink />
```

This will render the `select` only and will not dynamically add the selected theme CSS link in the `head`. It just becomes a plain old `select`. Use `onChange` to listen for selection changes.

### Bootstrap + Bootswatch

If you'd like to load Bootstrap (or Font Awesome) from the CDN before the [BootswatchSelect](https://devboldly.github.io/react-bootswatch-select/BootswatchSelect) is used:

```jsx
import { Bootstrap, FontAwesome, BootswatchSelect } from 'react-bootswatch-select';
...
<Bootstrap version={'4.4.1'} />
<FontAwesome version={'4.7.0'} />
<BootswatchSelect version={'4.4.1'} className="form-control" />
```

All CSS is loaded from [bootstrapcdn.com](https://www.bootstrapcdn.com/) by default. Check there for the latest version.

Font Awesome is not required for [BootswatchSelect](https://devboldly.github.io/react-bootswatch-select/BootswatchSelect), but is included here in case you want it.

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

## Logo Attribution

Logo graphics by [Twemoji](https://github.com/twitter/twemoji), licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/). Favicon by [favicon.io](https://favicon.io/emoji-favicons/).

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

See [Kindling](https://tinyurl.com/kindlingscripts) for npm script documentation.

## ⭐ Found It Helpful? [Star It!](https://github.com/devboldly/react-bootswatch-select/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/devboldly/react-bootswatch-select/stargazers): [👉⭐](https://github.com/devboldly/react-bootswatch-select/stargazers)

## MIT License

```
Copyright © 2020 DevBoldly https://devboldly.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```