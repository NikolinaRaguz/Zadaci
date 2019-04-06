function convertToRoman(num) {
	var arabic = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
	var roman = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
	var converted = "";
  
	for (var i = 0; i < arabic.length; i++) {
	  while (arabic[i] <= num) {
		converted = converted + roman[i];
		num = num - arabic[i];
	  }
	}
	return converted;
  }
  console.log(convertToRoman(55));