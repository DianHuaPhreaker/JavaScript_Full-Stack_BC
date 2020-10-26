// Exercises With Strings
// charAt(i) - meethod returns the character at the position i of a string
console.log("Flavio".charAt(0));
console.log("Flavio".charAt(2));
console.log("Flavio".charAt(4));

// concat(str) - concatenates current string with the string str
console.log("Flavio".concat(" ").concat("Copes"));

// endsWith(str) - check if a string ends with the value of the string str
console.log("JavaScript".endsWith("Script"));
console.log("JavaScript".endsWith("script"));

// includes(str) - check if a string includes the value of the string str
console.log("JavaScript".includes("Script"));
console.log("JavaScript".includes("script"));
console.log("JavaScript".includes("JavaScript"));
console.log("JavaScript".includes("aSc"));
console.log("JavaScript".includes("C++"));

// You can pass a second parameter to set the starting point:
console.log("JavaScript".indexOf("Script"));
console.log("JavaScript".indexOf("JavaScript"));
console.log("JavaScript".indexOf("aSc"));
console.log("JavaScript".indexOf("C++"));

console.log("a nice string".indexOf("nice") !== -1);
console.log("a nice string".indexOf("nice", 3) !== -1);
console.log("a nice string".indexOf("nice", 3) !== -1);

/* lastIndexOf(str)
 */
console.log(
  "JavaScript is a great language. Yes I mean JavaScript".lastIndexOf("Script")
);
console.log("JavaScript".lastIndexOf("C++"));

// padEnd() - purpose of string padding is to add characters to a string, so it reaches a specific length
// console.log(padEnd(targetLength [, padString]));

// padStart() - to add characters at the beginning

// repeat() - repeats string for specified amount of times
console.log("Ho".repeat(4));

// Replace(str1, str2) - find first occurrence of str1 in the current string and replaces it with str2
// will return new string
console.log("JavaScript".replace("Java", "Type"));
// you can pass regular expression as the first argument
console.log("JavaScript".replace(/Java/, "Type"));
/* replace() will only replace firrst occurrence, unless you use a regex as the search string, 
and you specify the global (/g) option: 
*/
console.log("JavaScript JavaX".replace(/Java/g, "Type"));

// search(str)
console.log("JavaScript".search("Script"));
console.log("JavaScript".search("TypeScript"));

// slice(begin, end)
console.log("This is my car".slice(5));
console.log("This is my car".slice(5, 10));

// If you set a negative first parameter, the start index starts from the end, and the
// second parameter must be negative as well, always counting from the end
console.log("This is my car".slice(-6));
console.log("This is my car".slice(-6, -4));

// split(separator) - split() turncates a string when it finds a pattern (case, sensitive) and
// returns an array with the tokens
const phrase = "I love my dog! Dogs are great!";
const tokens = phrase.split("dog");

console.log(tokens);

// startswith(str) - check if a string starts with the value of the string str
console.log("testing".startsWith("test"));
console.log("going on testing".startsWith("test"));

// this method accepts a second parameter, which lets you specify at which character you want to start checking:
console.log("testing".startsWith("test", 2));
console.log("testing".startsWith("test", 9));

// substring() - returns a portion of a string and it's similar to slice(), with some key differences
console.log("This is my car".substring(5));
console.log("This is my car".substring(5, 10));
console.log("This is my car".substring(5, 200));
console.log("This is my car".substring(-6));
console.log("This is my car".substring(-6, 2));
console.log("This is my car".substring(-6, 200));

// toLowerCase() - returns a new string with the text in all lower case
console.log("testing".toLowerCase());

// toString() - returns the string representation of the current string object:
const str = new String("Test");
console.log(str.toString());

// toUpperCase() - returns a new string with all uppercase text
console.log("Testing".toUpperCase());

// trim() - returns a new string with removed white space from the beginning and the end of the original string
console.log("Testing".trim());
console.log("   Testing".trim());
console.log("  Testing  ".trim());
console.log("Testing  ".trim());

// trimEnd()
console.log("Testing".trimEnd());
console.log("  Testing".trimEnd());
console.log("Testing   ".trimEnd());
console.log("  Testing   ".trimEnd());

// trimStart()
console.log("Testing".trimStart());
console.log("  Testing".trimStart());
console.log("Testing   ".trimStart());
console.log("  Testing   ".trimStart());
