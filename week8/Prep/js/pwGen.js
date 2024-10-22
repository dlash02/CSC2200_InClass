const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const symbols = '!@#$%^&*()_+';

document.getElementById('generatePassword').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);
    const useSymbols = document.getElementById('symbols').checked;
    let characterSet = chars;  // Default character set
    if (useSymbols) {
        characterSet += symbols;  // Add symbols if checked
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }
    document.getElementById('passwordOutput').textContent = password;
});