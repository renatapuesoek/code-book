/*  Exercise 1:
    -----------
    Write a JavaScript program to check two numbers
    and return true if one of the number is 100 or if
    the sum of the two number is 100
 */

export const isEqualTo100 = (num1, num2) =>
  num1 === 100 || num2 === 100 || num1 + num2 === 100;

/*  Exercise 2:
    -----------
    Write a JavaScript program to get teh extension of a filename
 */

export const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

/*  Exercise 3:
    -----------
    Write a JS program to replace every character in a given string
    with the character following it in the alphabet
 */

export const replaceChar = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

/*  Exercise 4:
    -----------
    Write a JS program to get the current date.
    Expected output: mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */

export const formatDate = (date = new Date()) => {
  const days = date.getDate();
  const months = date.getMonth() + 1;
  const years = date.getFullYear();
  return `${days}/${months}/${years}`;
};

/*  Exercise 5:
    -----------
    Write a JS program to create a new string adding "New!" in front of
    a given string. If the given string begins with "New!" already
    then return the original string.
 */

export const addNew = (str) =>
  str.indexOf("New!") === 0 ? str : `New! ${str}`;
