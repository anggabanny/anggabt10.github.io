var storedName = localStorage.getItem('username');
if(storedName){
    document.getElementById('UsernameNick').innerHTML = storedName;
}
function logout(){
    var x = confirm('anda yakin ingin keluar dan kembali ke homepage?');
    if(x == true){
        window.location.replace('../Load/home.html');
    }
}

function pindah1(){
    window.location.replace('../Load/fc.html');
}

function pindah2(){
    window.location.replace('../Load/ptm.html');
}