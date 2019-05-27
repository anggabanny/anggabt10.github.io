function mainmenu(){
  var x = confirm('Kembali homeGame?');
  if(x == true){
      window.location.replace('./main.html');
  }
}

// -----------
var angka = Math.floor(Math.random() * 10) + 1;
  console.log(angka);
var random = 'button' + angka;
console.log(random);

var jumlah = 0;
var ketemu = 'belum';
var kesempatan = 3;
function a(id) {
  console.log(id);
  console.log(random);
  
  if (random == id) {
    document.getElementById(id).style.background = 'green';
    jumlah++;
    document.getElementById('text7').innerHTML = 'jumlah tebakan = ' + jumlah;
    ketemu = 'sudah';
    if (ketemu == 'sudah' && jumlah <= kesempatan) {
      document.getElementById('text8').style.display = 'block';
      document.getElementById('next1').style.display = 'block';
    }
  } else {
    if (random != id) {
      document.getElementById(id).style.background = 'red';
    }
    jumlah++;
    console.log()
    if(id < random){
      document.getElementById('text6').innerHTML = 'Tebakan Salah, Semangaatt'
    } else if(id > random){
      document.getElementById('text6').innerHTML = 'Tebakan Salah, Ayoo semangat'
    }

    document.getElementById('text7').innerHTML = 'jumlah tebakan = ' + jumlah;
    if (ketemu == 'belum' && jumlah > kesempatan) {
      document.getElementById('text9').style.display = 'block';
      var x = confirm('anda menebak melebihi aturan!');
      if (x == true) {
        document.getElementById('text9').style.display = 'block';
        document.getElementById('reload').style.display = 'block';
      } else {
        document.getElementById('text9').style.display = 'block';
        document.getElementById('reload').style.display = 'block';
      }
    }
  }
}
var f = document.getElementById('next1');
f.addEventListener('click',function(){
  window.location.replace('./Level2.html')
})

var g = document.getElementById('reload');
g.addEventListener('click',function(){
  location.reload();
})
// --------------------------------------------------------------------
function logout(){
  var x = confirm('anda yakin ingin keluar dan kembali ke homepage?');
  if(x == true){
      window.location.replace('../Load/home.html');
  }
}