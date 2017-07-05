//Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'

const s = "abacabad"

const z = "abacabaabacaba"

function firstNotRepeatingCharacter(s) {
      for (var i = 0; i < s.length; i++) {
        var x = s.charAt(i);
          if (s.indexOf(x) == i && s.indexOf(x, i + 1) == -1) {
            return x;
          }
      }
  return '_';
}
firstNotRepeatingCharacter();

// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise). It looks it needs more debugging.
/* sample input: arr = [[1, 2, 3],
						[4, 5, 6],
 						[7, 8, 9]]
*/
function rotateImage(a) {
  var n = a.length

  for (i = 0; i < n / 2; i++) {
			var first = i; 
    
			var last = n - 1 - i;
			for (j = first; j < last; j++) {
				var offset = j - first;
				var top = a[first][j];
				a[first][j] = a[last - offset][first];
				a[last - offset][first] = a[last][last - offset];
				a[last - offset][last] = a[j][last];
				a[j][last] = top;
			}
		}
		
    return a
}
rotateImage(arr);

// digital root : return the sum of the two digits of a number until a single digit sum is left

function digital_root(n) {
    if (n < 10) {
        return n;
    }

    var sum = 0;
    while(n != 0) {
        sum += n % 10;
        n = Math.floor(n/10);
    }
    return digital_root(sum);
}

//fibonnacci sequence

function fib(n) {
  var fib = [0,1]
  
  while (fib.length < n) {
      fib.push(fib[fib.length - 1] + fib[fib.length -2]);
    }
    
  if (n <=1) {
    return fib.slice(0,2);
  }

  if (n == 0) {
      return 'nothing to return';
    }
  return fib;
}

// translate to pig latin

function toPigLatin(str) {
  var pigLatin = '';
  var vowel = new RegExp('[aeiouy]', "g");

  if (str[0].match(vowel)) {
    pigLatin = str + 'way';

  } else {

    var vowelIndice = str.indexOf(str.match(vowel)[0]);
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}
