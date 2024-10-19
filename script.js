function decodeClue() {
    const encryptedClue = document.getElementById('clue-input').value;
    const key = 3;
    document.getElementById('decoded-output').textContent = treasureCipher(encryptedClue, -key);
}

function treasureCipher(clue, key) {
    return clue.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const charCode = char.charCodeAt(0);
            const base = charCode >= 97 ? 97 : 65;
            return String.fromCharCode(((charCode - base + key) % 26 + 26) % 26 + base);
        }
        return char;
    }).join('');
}
