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
