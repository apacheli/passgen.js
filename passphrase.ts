import { getRandomIndex } from "./lib.ts";

const words = (await Bun.file("./words.txt").text()).split(/\r?\n/);

/**
 * Generate a passphrase.
 *
 * @param len The number of words to include into the passphrase. `5` or more words is recommended.
 * @param separator Separator to join the words.
 */
function generatePassphrase(len = 5, separator = "-", capitalize = false) {
    const arr = new Array(len);
    for (let i = 0; i < len; i++) {
        const word = getRandomIndex(words);
        arr[i] = capitalize ? word[0].toUpperCase() + word.slice(1) : word;
    }
    return arr.join(separator);
}

export {
    generatePassphrase,
    // words,
};
