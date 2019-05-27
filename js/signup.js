var username1 = document.getElementById('username1');
var password1 = document.getElementById('password1');
var email1 = document.getElementById('email1');
var select1 = document.getElementById('select1');
var family1 = document.getElementById('family1');
var select2 = document.getElementById('select2');

function storageLocal() {
    if (username1.value == ''){
        alert('username tidak boleh kosong');
    } else if(password1.value == ''){
        alert('password tidak boleh kosong');
    } else if(email1.value == ''){
        alert('email tidak boleh kosong');
    } else if(family1.value == ''){
        alert('kolom keluarga tidak boleh kosong');
    } else {
    localStorage.setItem('username', username1.value);
    localStorage.setItem('password', password1.value);
    localStorage.setItem('email', email1.value);
    localStorage.setItem('nations', select1.value);
    localStorage.setItem('keluarga', family1.value);
    localStorage.setItem('saya_adalah', select2.value);
        
    alert('Create is success');
    window.location.replace('../Load/home.html');
    }
}


function back(){
    var x = confirm('anda yakin akan kembali?');
        if(x == true){
            window.location.replace('../Load/home.html');
        }
}