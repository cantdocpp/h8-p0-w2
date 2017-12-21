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

//tugas 2
var pagar = '';
for (index1 = 1; index1 <= 10; index1++) {
  for (index2 = 0; index2 <= 10; index2++) {
    pagar += '#';
  }
  console.log(pagar);
  var pagar = '';
}

//tugas 3
var bintang = '';
for (index1=1; index1 <11; index1++) {//console.log(index1);
  for (index2 = 0; index2 <= index1; index2++) {//console.log(index2);
    bintang += '*';
  }
  console.log(bintang);
  bintang = '';
}
