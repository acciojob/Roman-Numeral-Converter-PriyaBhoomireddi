function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let romanNumeral = '';

  for (let key in obj) {
    const symbol = obj[key][0];
    const value = obj[key][1];

    while (num >= value) {
      romanNumeral += symbol;
      num -= value;
    }
  }

  return romanNumeral;
}

// Test cases
console.log(convertToRoman(14)); // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII
console.log(convertToRoman(36)); // Output: XXXVI

module.exports = convertToRoman;
