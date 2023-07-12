/*

This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to determine leap years both before and after 1752.

*/

let isLeapYear = (x) => {

	if (x <= 1752){
		return (x % 4 == 0);
	}
	else {
		return ((x % 4 == 0) && ((x % 100 !== 0) && (x % 400 == 0)));
	}
}
let result = isLeapYear(1700);

console.log(result);
