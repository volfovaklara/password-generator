// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Global variables to store user choices
var includeLowerCase;
var includeUpperCase;
var includeNumeric;
var includeSpecial;

var pool = [];
var passwordLength;

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt for the lenght
  passwordLength = prompt("Enter the length of the password. At least 8 characters, but no more than 128.");
  // Validate the password length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.")
    return; // Exit the function
  }
  // Check if the input is number
  if (isNaN(passwordLength)) {
    alert("Invalid input. Password length must be a number.")
    return; // Exit the function
  }
  // Prompt for the character types
  includeLowerCase = confirm("Would you like to include lowercase characters?");
  includeUpperCase = confirm("Would you like to include uppercase characters?");
  includeNumeric = confirm("Would you like to include numbers?");
  includeSpecial = confirm("Would you like to include special characters?");

  // Validate that at least one character type is selecter
  if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecial) {
    alert("At least one character type has to be selecter.")
    return; // Exit function
  }
}

// Function for getting a random element from an array
function getRandom() {
  if (includeLowerCase) {
    pool = pool.concat(lowerCasedCharacters);
  }
  if (includeUpperCase) {
    pool = pool.concat(upperCasedCharacters);
  }
  if (includeNumeric) {
    pool = pool.concat(numericCharacters);
  }
  if (includeSpecial) {
    pool = pool.concat(specialCharacters);
  }
}

// Function to generate password with user input
function generatePassword() {
  getRandom(); // Pool of characters
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * pool.length);
    password += pool[randomIndex];
  }
  return password;
}

// Updates the value of the input area
function updatePasswordTextarea(password) {
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  updatePasswordTextarea(password);
}

// Add event listener to generate button
generateBtn.addEventListener('click', function () {
  getPasswordOptions();
  writePassword();
});