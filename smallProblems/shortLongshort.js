/*

Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

*/

let sls = (x, y) => {

	if (x.length > y.length)
		console.log(y + x + y);
	else
		console.log(x + y + x);
}

sls('abc', 'defgh');
