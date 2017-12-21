var tahunLahir = 2040;
var umur = 2017 - tahunLahir;
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));
var nama = 'jack';
var peran = 'knight';

if (nama === '') {
  nama = 'kacung';
} else {
  nama = nama;
}

for (i = 0; i < tahunLahir; i++) {
  if (i % umur === 0) {
    console.log(peran + ' ' + nama + ' menyerang monster!');
    monsterHealth = monsterHealth - umur;
  } else if (i % kodeMonster === 0) {
    console.log('monster menyerang ' + peran + ' ' + nama + '!');
    playerHealth = playerHealth - kodeMonster;
  } else if (i % umur === 0 && i % kodeMonster === 0) {
    console.log('Health keduanya bertambah');
    playerHealth = playerHealth + kodeMonster;
    monsterHealth = monsterHealth + umur;
  }
}

/*
var i = 0;
while (i < tahunLahir) {
  if (i % umur === 0) {
    console.log(peran + ' ' + nama + ' menyerang monster!');
    monsterHealth = monsterHealth - umur;
  } else if (i % kodeMonster === 0) {
    console.log('monster menyerang ' + peran + ' ' + nama + '!');
    playerHealth = playerHealth - kodeMonster;
  } else if (i % umur === 0 && i % kodeMonster === 0) {
    console.log('Health keduanya bertambah');
    playerHealth = playerHealth + kodeMonster;
    monsterHealth = monsterHealth + umur;
  }
  i++;
}
*/

if (playerHealth > monsterHealth) {
    console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
  } else {
    console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
  }
