# passgen.js

JavaScript library for generating passwords using the Web Crypto API.

## Install

With Bun (1.3.8 or higher):

```sh
$ bun install https://github.com/apacheli/passgen.js
```

With Deno (2.3.1 or higher):

```js
import * as passgen from "https://raw.githubusercontent.com/apacheli/passgen.js/refs/heads/master/lib.ts";
```

## Example

```js
import { generatePassword, highlightPassword } from "passgen.js";

const password = generatePassword(16);

console.log("Your generated password is:", highlightPassword(password));
```

## API

### `getRandomValue(): number`

Get a random cryptographically secure value from `0` to `255`.

```js
console.log(getRandomValue());
```

### `getRandomInt(max: number): number`

Get a random cryptographically secure integer.

- `max`: The maximum number up to `255`.

```js
console.log(getRandomInt(100)); // 0-99
```

### `getRandomIndex(indexable)`

Index something using a cryptographically secure integer.

- `indexable`: Something that can be indexed like a string or array.

```js
const participants = ["John", "Bob", "Alex"];

console.log("The winner is:", getRandomIndex(participants));
```

### `getRandomString(len: number, charset: string): string`

Generate a cryptographically secure random string.

- `len`: The length of the string.
- `charset`: A set of characters to index from.

```js
import { CharacterSet } from "passgen.js";

console.log(getRandomString(4, CharacterSet.Digits));
```

### `generatePassword(len: number): string`

Generate a password. The password is guaranteed to include a lowercase letter, an uppercase letter, a digit, and a symbol.

- `len`: The length of the password. `16` or more characters is recommended.

```js
const password = generatePassword(16);
```

### `highlightPassword(password: string): string`

> [!WARNING]
> Use for debugging purposes only.

Highlight letters, digits, and symbols in a password using ANSI colors.

- `password`: The password to be highlighted.

```js
const password = generatePassword(16);

console.log(highlightPassword(password));
```

## License

[Apache License](LICENSE.txt)
