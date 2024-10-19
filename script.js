function decodeBase64() {
    const base64Input = document.getElementById('base64-input').value;
    try {
        const decodedString = atob(base64Input);
        document.getElementById('decoded-output').textContent = decodedString;
    } catch (error) {
        document.getElementById('decoded-output').textContent = 'Invalid Base64 string';
    }
}
