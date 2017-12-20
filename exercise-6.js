console.log('MENENTUKAN GANJIL DAN GENAP')
for (i = 1; i < 101; i++) {
  if (i%2 === 0) {
    console.log('genap')
  } else {
    console.log('ganjil');
  }
}

console.log('PERTAMBAHAN COUNTER 2 DENGAN KELIPATAN 3')

for (j = 1; j < 101; j = j + 2) {
  if (j % 3 === 0) {
    console.log(j + ' ' + ' KELIPATAN 3');
  } else {
    console.log(j);
  }
}

console.log('PERTAMBAHAN COUNTER 5 DENGAN KELIPATAN 6');

for (k = 1; k < 101; k = k + 5) {
  if (k % 6 === 0) {
    console.log(k + ' ' + ' KELIPATAN 6');
  } else {
    console.log(k);
  }
}

console.log('PERTAMBAHAN COUNTER 9 DENGAN KELIPATAN 10');

for (l = 1; l < 101; l = l + 9) {
  if (l % 10 === 0) {
    console.log(l + ' ' + ' KELIPATAN 10');
  } else {
    console.log(l);
  }
}
