function decodeClue() {
    const encryptedClue = document.getElementById('clue-input').value;
    const key = 3;
    document.getElementById('decoded-output').textContent = treasureCipher(encryptedClue, -key);
}

function treasureCipher(clue, key) {
    var out = document.getElementById('meow')
    return clue.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const charCode = char.charCodeAt(0);
            const base = charCode >= 97 ? 97 : 65;
            return String.fromCharCode(((charCode - base + key) % 26 + 26) % 26 + base);
        }
        out.innerHTML = "Is the output not visible? Hahahahahaha......buhahaha may be try take a look at the files especially the css";
        return char;
        
    }).join('');
}
