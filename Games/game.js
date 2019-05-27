var start  = document.getElementById('start');
start.addEventListener('click',function(){
  window.location.replace('./Level1.html')
})
// --------------------------------------------------------------------
function logout(){
  var x = confirm('anda yakin ingin keluar dan kembali ke homepage?');
  if(x == true){
      window.location.replace('../Load/home.html');
  }
}
