//tugas 1
var total = 0;
for (index = 1; index < 101; index++) {
  if (index % 2 !== 0) {
    total += index;
  } else {
    if (index % 2 === 0 ) {
    total -= index;
  }
}
}

console.log('total :' + ' ' + total);
