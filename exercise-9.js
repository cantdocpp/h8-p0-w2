//tugas 1
var nama = 'philip';
var angkaPembilang = 10;
var angkaPenyebut = 20;
var hasilBagi = angkaPembilang / angkaPenyebut;

console.log('halo ' + nama + ' '+ angkaPembilang + ' dibagi ' + angkaPenyebut + ' adalah sama dengan ' + hasilBagi);

//tugas 2

var alas = 10;
var tinggi = 15;
var luasSegitiga = alas * tinggi / 2;
console.log('Luas Segitiga: ' + luasSegitiga);

//tugas 3

var tahun = 2045;

if (tahun % 4 === 0) {
  if (tahun % 100 !== 0) {
    console.log(tahun + ' adalah tahun kabisat');
  } else {
    if (tahun % 400 === 0) {
    console.log(tahun + ' adalah tahun kabisat');
    } else {
      console.log(tahun + ' adalah bukan tahun kabisat');
    }
  }
}
else {
  console.log(tahun + ' adalah bukan tahun kabisat');
}
