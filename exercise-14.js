var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
  input.splice(1,4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")

  return input
}

console.log(dataHandling2(input));


var bulan = input[3][3] + input[3][4];
function merubahAngkaBulan() {
  switch(bulan) {
    case '01':
      bulan = 'Januari';
      break;
    case '02':
      bulan = 'Febuari';
      break;
    case '03':
       bulan = 'Maret';
       break;
    case '04':
      bulan = 'April';
      break;
    case '05':
      bulan = 'Mei'
      break;
    case '06':
      bulan = 'Juni';
      break;
    case '07':
      bulan = 'Juli';
      break;
    case '08':
      bulan = 'Agustus';
      break;
    case '09':
      bulan = 'September';
      break;
    case '10':
      bulan = 'Oktober';
      break;
    case '11':
      bulan = 'November';
      break;
    case '12':
      bulan = 'Desember';
      break;
  }
  return bulan;
}

console.log(merubahAngkaBulan());


var split = input[3].split('/');
var numbers = split;

split.sort(function(a, b) {
  return b - a;
});

console.log(split.map(function(i){
    return parseInt(i, 10);
}));

function joiningANumberDate() {
var join = input[3].split('/');
return join;
}

console.log(joiningANumberDate().join('-'));

console.log(input[1].slice(0,15));
