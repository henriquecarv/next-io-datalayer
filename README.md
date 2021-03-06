# next-io-datalayer

Datalayer Helper class

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4816610e1a304b0e9b189349e8367a0e)](https://www.codacy.com/app/henriquecarv/next-io-datalayer?utm_source=github.com&utm_medium=referral&utm_content=henriquecarv/next-io-datalayer&utm_campaign=Badge_Grade)
[![npm](https://img.shields.io/npm/v/next-io-datalayer.svg)](https://www.npmjs.com/package/next-io-datalayer)
[![npm](https://img.shields.io/npm/dt/next-io-datalayer.svg)](https://www.npmjs.com/package/next-io-datalayer)
[![LICENSE](https://img.shields.io/github/license/henriquecarv/next-io-datalayer.svg)](./LICENSE)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=henriquecarv/next-io-datalayer)](https://dependabot.com)

## System Requirements

- **[NodeJS](https://nodejs.org/en/)** (version >= 10).

## Installing

- `yarn add next-io-datalayer`

## Class Usage

```javascript
import { DispatchDataLayer } from "next-io-datalayer";

new DispatchDataLayer(
  "generic-event-trigger",
  "default action",
  "default category",
  "default label"
);
```

## Function Usage

```javascript
import { dispatchDataLayer } from "next-io-datalayer";

dispatchDataLayer(
  "generic-event-trigger",
  "default action",
  "default category",
  "default label"
);
```

### License

Copylefted (c) 2020 [Henrique Carvalho da Cruz][1] Licensed under the [MIT license][2].

[1]: https://henriquecarv.com
[2]: ./LICENSE
