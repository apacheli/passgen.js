# passgen.js

JavaScript library for generating passwords using the Web Crypto API.

## Install

With Bun:

```sh
$ bun install https://github.com/apacheli/passgen.js
```

With Deno:

```js
import * as passgen from "hhttps://github.com/apacheli/passgen.js/raw/refs/heads/master/lib.ts";
```

## Example

```js
import { generatePassword, highlightPassword } from "./lib.ts";

const password = generatePassword(16);

console.log("Your generated password is:", highlightPassword(password));
```

## API

### `getRandomValue(): number`

Get a random cryptographically secure value from `0` to `255`.

### `getRandomInt(max: number): number`

Get a random cryptographically secure integer.

- `max`: The maximum number up to `256`.

### `getRandomIndex(indexable)`

Index something using a cryptographically secure integer.

- `indexable`: Something that can be indexed like a string or array.

### `getRandomString(len: number, charset: string): string`

Generate a cryptographically secure random string.

- `len`: The length of the string.
- `charset`: A set of characters to index from.

### `generatePassword(len: number): string`

Generate a password. The password is guaranteed to include a lowercase letter, an uppercase letter, a digit, and a symbol.

- `len`: The length of the password. `16` or more characters is recommended.

### `highlightPassword(password: string): string`

> [!WARNING]
> Use for debugging purposes only.

Highlight letters, digits, and symbols in a password using ANSI colors.

- `password`: The password.

## License

[Apache License](LICENSE.txt)
