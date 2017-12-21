function balikString(string) {
  var kata = [''];
    for (var i = string.length - 1; i >= 0; i--)
    kata += string[i];
  return kata;
}

console.log(balikString('hello world!'));
