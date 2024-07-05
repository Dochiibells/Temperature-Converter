// Morse code mapping
const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----', ' ': '/', // Space between words
    '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.',
    '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-',
    '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-',
    '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.',
    '$': '...-..-', '@': '.--.-.'
};

// Inverted Morse code map for decoding
const inverseMorseCodeMap = {};
for (const key in morseCodeMap) {
    inverseMorseCodeMap[morseCodeMap[key]] = key;
}

// Function to encode text into Morse Code.
function encodeToMorse(text) {
    return text.toUpperCase().split('').map(char => morseCodeMap[char] || '').join(' ');
}

// Function to decode Morse code into text.
function decodeFromMorse(morse) {
    morse = morse.replace(/_/g, '-').replace(/\/+/g, ' / '); 
    const words = morse.split(' / '); 
    return words.map(word => word.split(' ').map(code => inverseMorseCodeMap[code] || '').join('')).join(' ');
}

// Function for encoding & decoding.
function Process() {
    const inputTextBox = document.getElementById('inputtxtbox');
    const outputElement = document.getElementById('output');
    const inputText = inputTextBox.value.trim();

    const isEncode = document.getElementById('toEncoder').checked;
    const isDecode = document.getElementById('toDecoder').checked;

    if (isEncode) {
        outputElement.textContent = encodeToMorse(inputText);
    } else if (isDecode) {
        outputElement.textContent = decodeFromMorse(inputText);
    } else {
        outputElement.textContent = "Please select an option to encode or decode.";
    }

}

// Event listener for the button.
document.getElementById('clickbtn').addEventListener('click', Process);
