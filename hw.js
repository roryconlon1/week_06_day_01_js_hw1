//1:
//   Miss Scarlet as both functions are at the same level

//2:
// Error as trying to chnge value of a const

//3:
// Mrs Peacock then Mr Plum.  declareMurderer changes murderer name for that function, but when running outwith that function, still Mr plum as declared at the top level.

//4:
//Mrs Scarlet, Proffesor Plum, Colonel Mustard.  Then Mrs Peacock.  Similar to above where 3rd has been changed within the function, but will only change when function is called.

//5:
//Revolver.  Can change properties of the function, just not the function itself. changeWeapon and declareWeapon have been made at the same level as scenario so can be used.

//6:
//Mrs. White.  changeMurderer function changes it to Mr Green originally. Then new function called within chnageMurderer changing it to Mrs White.  As new function is then called within changeMurderer, its chnages result to be the new result within new function within changeMurderer.

//7:
//Mr. Green.  Similar to above, however calling let murderer means only accessible within that function and not at the top level function.

//8:
//Colonel Mustard in the Dining Room with the candle stick.  Like number 6 just a few extra steps involved.

//9:
//Professor Plum.  Let murderer in a lower level and not been called maybe? Not sure as im assuming as its the last qs its the hardest and probably more complicated than ive said.

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);