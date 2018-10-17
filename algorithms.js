//1. write a function to store the range of values with a given number of steps to be computed in an array
function range(x, y, z = 1){
	let numbersInRange = [];
	//pre-es6 method for default values below
	// z === undefined ? z = 1 : z = z;
	if (x < y){
		for (let i = x; i <= y; i+=z){
			numbersInRange.push(i);
		}
	} else {
		for (let i = x; i >= y; i+=z){
			numbersInRange.push(i);
		}
	}
	return numbersInRange;
}

//2. write function to sum up all values in the range array
function sum(x){
	let total = 0;
	for ( let i = 0; i < x.length; i++ ){
		total += x[i];
	} 
	return total;
}

//3. write a recursive function to determine if a number is even or not
function isEven(x){
	if ( x === 0 ) return true;
	else if ( x === 1 ) return false;
	else {
			if( x < 0 ) return isEven( x + 2 );
			return isEven( x - 2 );
	}
}

//4. write a function to determine the minimum of two numbers
function min(a, b){
	if ( a < b ) return a;
	else return b;
}

//5. write a function that creates a chess board using "#" and spaces and takes a parameter to determine size of board
function gridSystem(size){
	var pattern = "";
	for(var i = 0; i < size; i++){
        if( i % 2 === 0 ){
            for (var k = 0; k < size; k++){
                if( k % 2 === 0 ) pattern += " "; 
                else pattern += "#";
            } pattern += "\n";
        } else {
            for (var k = 0; k < size; k++){
                if( k % 2 === 0 ) pattern += "#"; 
                else pattern += " ";
            } pattern += "\n";
        }
    } 
    console.log(pattern);
}
//6. write a function that takes a string as a parameter and returns the number of uppercase "B's" in it
function countBs(x){
	var count = 0;

	for(let i = 0; i < x.length; i++){
		if(x[i] === "B") count++; 
	} 
	
	return count;
}

//7. write a function that takes a string as a parameter and a character as the second parameter and return the number of the second parameter(second char) in it.
function countChar(x, y){
	var count = 0;
	for(let i = 0; i < x.length; i++){
		if(x[i] === y) count++; 
	} 
	return count;
}

//8. rewrite countBs function to use countChar
function newCountBs(x){
	return countChar(x, "B");
}

//9. write a function to capitalize the first letter of a string
const capitalize = stringToCapitalize => {
	let firstLetter = stringToCapitalize[0].toUpperCase();
	let capitalizedString = stringToCapitalize.replace(stringToCapitalize[0], firstLetter);
	return capitalizedString;
}