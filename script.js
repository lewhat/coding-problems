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

// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise). 
function rotateImage(a) { 
  let len = a.length
   for (i = 0; i < len; i++, len--) {  
     let end = len - 1;  
     for ( j = i; j < end; j++) {  
       let tail = a.length - j - 1;  

      let temp = a[i][j];  
       a[i][j] = a[tail][i];  
       a[tail][i] = a[end][tail];  
       a[end][tail] = a[j][end];   
       a[j][end] = temp;  
     }  
   }  
   return a
}

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
// digital root

function digital_root(int) {
    if (int < 10) {
        return int;
    }

    var sum = 0;
    while(int != 0) {
        sum += int % 10;
        int = Math.floor(int/10);
    }
    return this.digitalRoot(sum);
};

//2nd day activity
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

// 3rd day activity
//largest_contiguous_subsum

function lcs(n) {
    var startSum = 0;
    var largestSum = n[0];

    for (var i = 0; i < n.length; i++) {

        startSum += n[i];
        if (startSum < 0) {
            startSum = 0;
        }

        if (largestSum < startSum) {
            largestSum = startSum;
        }
    }
    return largestSum;
}
//input
var array = [2,5,4,8,-1,2]
lcs(array)

largest_contiguous_subsum


//merge sort
// still parcticing on this one

function merge(left, right) {
    var newArray = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            newArray.push(left.shift());
        } else {
            newArray.push(right.shift());
        }
    }

    while (left.length) {
        newArray.push(left.shift());
    }

    while (right.length) {
        newArray.push(right.shift());
    }

    return newArray;
}

function sort(a) {
    if (a.length < 2) {
        return a;
    }

    var middle = parseInt(a.length / 2);
    var left   = a.slice(0, middle);
    var right  = a.slice(middle, a.length);

    return merge(sort(left), sort(right));
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
