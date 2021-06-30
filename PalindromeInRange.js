let palindromeArr = new Array();
function reverse(n){
    var digit, result = 0

    while(n > 0 ){
        digit = n % 10;
        result = (result * 10) + digit;
        n = n/10|0;
    }  
  return result;
}

function isPalindrome(n)
{
  let reverseNum = reverse(n);
  if(reverseNum == n){
    palindromeArr.push(n);
  }
}

for(let i = 10; i < 100; i++){
    isPalindrome(i);
}
console.log(palindromeArr);