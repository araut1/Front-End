var answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer);


str = 'Hi, Stack Overflow.';
res = '';
for (var i = 0; i < str.length; ++i) {
    c = str[i];
  if (c == c.toUpperCase()) {
    res += c.toLowerCase();
  } else if (c == c.toLowerCase()) {
    res += c.toUpperCase();
  } else {
    res += c;
  }
}
