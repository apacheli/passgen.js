const CharacterSet = {
    AlphabetLower: "abcdefghijklmnopqrstuvwxyz",
    AlphabetUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    Digits: "0123456789",
    Symbols: "!@#$%^&*",
};

const CHARACTERS_ALPHABET = CharacterSet.AlphabetLower + CharacterSet.AlphabetUpper;
const CHARACTERS_ALL = CHARACTERS_ALPHABET + CharacterSet.Digits + CharacterSet.Symbols;
// const ASCII_ALL = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

const MIN_LEN = 4;
const MAX_LEN = 65536;

const bytes = new Uint16Array(256);
let bytesIndex = bytes.length;

function getRandomValue() {
    if (bytesIndex === bytes.length) {
        crypto.getRandomValues(bytes);
        bytesIndex = 0;
    }
    return bytes[bytesIndex++];
}

function getRandomInt(max: number) {
    const x = MAX_LEN - (MAX_LEN % max);
    let int;
    do {
        int = getRandomValue();
    } while (int >= x);
    return int % max;
}

function getRandomIndex(indexable) {
    return indexable[getRandomInt(indexable.length)];
}

function getRandomString(len: number, charset: string) {
    let str = "";
    for (let i = 0; i < len; i++) {
        str += getRandomIndex(charset);
    }
    return str;
}

/**
 * Generate a password. The password is guaranteed to include a lowercase letter, an uppercase letter, a digit, and a symbol.
 * 
 * @param len The length of the password. `16` or more characters is recommended.
 */
function generatePassword(len = 16) {
    if (len < MIN_LEN || len > MAX_LEN) {
        throw new Error("Don't do that.");
    }

    const pw = [
        getRandomIndex(CharacterSet.AlphabetLower),
        getRandomIndex(CharacterSet.AlphabetUpper),
        getRandomIndex(CharacterSet.Digits),
        getRandomIndex(CharacterSet.Symbols),
    ];
    pw.length += len - MIN_LEN;

    for (let i = MIN_LEN; i < len; i++) {
        pw[i] = getRandomIndex(CHARACTERS_ALL);
    }

    for (let i = 0; i < MIN_LEN; i++) {
        const j = getRandomInt(pw.length - i) + i;
        [pw[i], pw[j]] = [pw[j], pw[i]];
    }

    return pw.join("");
}

const highlightTable = {};
for (let i = 0; i < CharacterSet.Digits.length; i++) {
    highlightTable[CharacterSet.Digits[i]] = "34";
}
for (let i = 0; i < CharacterSet.Symbols.length; i++) {
    highlightTable[CharacterSet.Symbols[i]] = "31";
}
for (let i = 0; i < CHARACTERS_ALPHABET.length; i++) {
    highlightTable[CHARACTERS_ALPHABET[i]] = "36";
}

function highlightPassword(pw: string) {
    let str = "";
    let x, y;
    for (let i = 0; i < pw.length; i++) {
        const char = pw[i];
        x = highlightTable[char] ?? "31";
        if (x !== y) {
            str += `\x1b[${x}m`;
            y = x;
        }
        str += char;
    }
    return str + "\x1b[0m";
}

export {
    // CHARACTERS_ALPHABET,
    CHARACTERS_ALL,
    // ASCII_ALL,
    CharacterSet,
    getRandomValue,
    getRandomInt,
    getRandomIndex,
    getRandomString,
    generatePassword,
    highlightPassword,
};
