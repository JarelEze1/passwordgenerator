document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements
    const lengthInput = document.getElementById("length");
    const uppercaseInput = document.getElementById("uppercase");
    const lowercaseInput = document.getElementById("lowercase");
    const numbersInput = document.getElementById("numbers");
    const symbolsInput = document.getElementById("symbols");
    const generateButton = document.getElementById("generate");
    const copyButton = document.getElementById("copy");
    const passwordTextarea = document.getElementById("password");
    const savePasswordButton = document.getElementById("save-password");
    const savedPasswordList = document.getElementById("saved-password-list-popup");
    const generatedPasswordList = document.getElementById("generated-password-list-popup");
    
    // Get references to the popup elements
    const savedPasswordsPopup = document.getElementById("saved-passwords-popup");
    const generatedPasswordsPopup = document.getElementById("generated-passwords-popup");
    const closeSavedPopup = document.getElementById("close-saved-popup");
    const closeGeneratedPopup = document.getElementById("close-generated-popup");
    
    // Function to copy generated password to the clipboard
    function copyToClipboard() {
        passwordTextarea.select();
        document.execCommand("copy");
        alert("Password copied to clipboard!");
    }
    
    function copyToClipboard() {
        try {
            passwordTextarea.select();
            document.execCommand("copy");
            alert("Password copied to clipboard!");
        } catch (err) {
            alert("Failed to copy the password to clipboard. Please copy it manually.");
        }
    }
    
    // Function to add saved passwords to the "Saved Passwords" list
    function addSavedPassword(password) {
        const savedPasswordItem = document.createElement("li");
        savedPasswordItem.textContent = password;
        savedPasswordList.appendChild(savedPasswordItem);
    }
    
    // Function to add generated passwords to the "Generated Passwords" list
    function addGeneratedPassword(password) {
        const generatedPasswordItem = document.createElement("li");
        generatedPasswordItem.textContent = password;
        generatedPasswordList.appendChild(generatedPasswordItem);
    }
    
    // Function to open the "Saved Passwords" popup
    function openSavedPasswordsPopup() {
        savedPasswordsPopup.classList.add("show");
    }
    
    // Function to open the "Generated Passwords" popup
    function openGeneratedPasswordsPopup() {
        generatedPasswordsPopup.classList.add("show");
    }
    
    // Function to close the "Saved Passwords" popup
    function closeSavedPasswordsPopup() {
        savedPasswordsPopup.classList.remove("show");
    }
    
    // Function to close the "Generated Passwords" popup
    function closeGeneratedPasswordsPopup() {
        generatedPasswordsPopup.classList.remove("show");
    }
    
    // Add a click event listener to the generate button
    generateButton.addEventListener("click", generatePassword);
    
    // Function to generate passwords
    function generatePassword() {
        const length = parseInt(lengthInput.value);
        const includeUppercase = uppercaseInput.checked;
        const includeLowercase = lowercaseInput.checked;
        const includeNumbers = numbersInput.checked;
        const includeSymbols = symbolsInput.checked;
    
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    
        let allChars = "";
    
        if (includeUppercase) {
            allChars += uppercaseChars;
        }
        if (includeLowercase) {
            allChars += lowercaseChars;
        }
        if (includeNumbers) {
            allChars += numberChars;
        }
        if (includeSymbols) {
            allChars += symbolChars;
        }
    
        let generatedPassword = "";
    
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            generatedPassword += allChars.charAt(randomIndex);
        }
    
        passwordTextarea.value = generatedPassword;
        addGeneratedPassword(generatedPassword); // Add the generated password to the list
    }
    
    // Add a click event listener to the copy button
    copyButton.addEventListener("click", copyToClipboard);
    
    // Add a click event listener to the save password button
    savePasswordButton.addEventListener("click", () => {
        const passwordToSave = passwordTextarea.value;
        addSavedPassword(passwordToSave); // Add the saved password to the list
        openSavedPasswordsPopup(); // Open the "Saved Passwords" popup
    });
    
    // Add click event listeners to open and close the popups
    document.getElementById("open-saved-popup").addEventListener("click", openSavedPasswordsPopup);
    document.getElementById("open-generated-popup").addEventListener("click", openGeneratedPasswordsPopup);
    closeSavedPopup.addEventListener("click", closeSavedPasswordsPopup);
    closeGeneratedPopup.addEventListener("click", closeGeneratedPasswordsPopup);
});
