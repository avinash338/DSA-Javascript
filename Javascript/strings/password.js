let charType = {
  UppercaseLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  LowercaseLetters: "abcdefghijklmnopqrstuvwxyz",
  Symbols: ',<.>/?"";:]}[{=+-_^%&*()',
  Numbers: "0123456789",
};

const generatePassword = (noOfChars, charTypes) => {
  let chars = "";
  let password = "";
  charTypes.forEach((element) => {
    chars += charType[element];
  });
  for (let i = 0; i < noOfChars; i++) {
    const index = Math.floor(Math.random() * chars.length);
    password += chars.charAt(index);
  }

  return password;
};

const result = generatePassword(10, ["UppercaseLetters", "Symbols", "Numbers", "LowercaseLetters"]);
console.log(result);
