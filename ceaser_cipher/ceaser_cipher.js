//character sets
const charSet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '\"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~',' ','\n'
];
let cipherSet = charSet;
//buttons
let encryptButton = document.getElementById('encrypt');
let decryptButton = document.getElementById('decrypt');
//inputs and outputs
let plainText 
let encryptedText
let key 

/**
 * Shifts the elements of the given array (cipherSet) to the left by 'key' positions.
 * This is typically used to create a shifted alphabet for a Caesar cipher.
 *
 * @param {Array} cipherSet - The array to be shifted (e.g., an alphabet array).
 * @param {number} key - The number of positions to shift the array by.
 * @returns {Array} - A new array with elements shifted left by 'key' positions.
 *
 * Example:
 *   shiftCipher(['A', 'B', 'C', 'D'], 2) // returns ['C', 'D', 'A', 'B']
 */

function shiftCipher(cipherSet, key) {
    let shiftedSet = [...cipherSet];
    let tempSet = shiftedSet.splice(-key);
    shiftedSet = tempSet.concat(shiftedSet);
    return shiftedSet;
}

function encrypt(plainText, cipherSet, charSet) {
    let encryptedText = '';
    for (let i = 0; i < plainText.length; i++) {
        let index = charSet.indexOf(plainText[i]);
        encryptedText += cipherSet[index];
    }
    return encryptedText;
}

function decrypt(encryptedText, cipherSet, charSet) {
    let decryptedText = '';
    for (let i =0; i < encryptedText.length; i++) {
        let index = cipherSet.indexOf(encryptedText[i]);
        decryptedText += charSet[index];
    }
    return decryptedText;
}

function encryptButtonClick() {
    plainText = document.getElementById('input').value;
    key = document.getElementById('key-input').value;
    cipherSet = shiftCipher(charSet, key);
    encryptedText = encrypt(plainText, cipherSet, charSet);
    document.getElementById('output').value = encryptedText;
}

function decryptButtonClick() {
    encryptedText = document.getElementById('input').value;
    key = document.getElementById('key-input').value;
    cipherSet = shiftCipher(charSet, key);
    plainText = decrypt(encryptedText, cipherSet, charSet);
    document.getElementById('output').value = plainText;
}


encryptButton.addEventListener('click', encryptButtonClick);
decryptButton.addEventListener('click', decryptButtonClick)


plainText = 'Hello World!';
cipherSet = shiftCipher(charSet, 13);
encryptedText = encrypt(plainText, cipherSet, charSet);
decryptedText = decrypt(encryptedText, cipherSet, charSet);

console.log(charSet);
console.log(shiftCipher(charSet, 13));
console.log(encryptedText);
console.log(decryptedText);
