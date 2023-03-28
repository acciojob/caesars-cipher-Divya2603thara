// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(str){
   let decodedArr = []; // Your Result goes here
  // Only change code below this line

  for (ch in str) {
    if (str.charCodeAt(ch) >= 65 && str.charCodeAt(ch) <= 90) {
      // my current character is a CAPITAL Alphabet
      if (str.charCodeAt(ch) >= 78) {
        decodedArr += String.fromCharCode(str.charCodeAt(ch) - 13);
      } else {
        decodedArr += String.fromCharCode(str.charCodeAt(ch) + 13);
      }
    } else {
      decodedArr += str[ch];
    }
  }

  return decodedArr;
}

 

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
