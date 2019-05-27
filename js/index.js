var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var slideIndex1 = 0;
showSlides1();

function showSlides1() {
  var i;
  var slides1 = document.getElementsByClassName("mySlides");
  var dots1 = document.getElementsByClassName("dot");
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}    
  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }

  slides1[slideIndex1-1].style.display = "block";  
  dots1[slideIndex1-1].className += " active";
  setTimeout(showSlides1, 4000);
}

// .........................................................
function check() {

  var storedName = localStorage.getItem('username');
  var storedPw = localStorage.getItem('password');

  var userName = document.getElementById('formUser');
  var userPw = document.getElementById('formPw');

  if((userName.value == storedName) && (userPw.value == storedPw)) {
    alert('Selamat Datang '+ storedName);
    window.location.replace('./Load/signin.html');
  } else if((userName.value == 'admin') && (userPw.value == 'admin')){
    alert('Selamat Datang admin');
    window.location.replace('./Load/signin.html');
  }else if((userName.value == '') && (userPw.value == '')){
    alert('silahkan Login!');
  }else if(userName.value == ''){
    alert("masukkan Username anda");
  } else if(userPw.value == ''){
    alert('masukkan Password anda');
  } else{
    alert('username atau password salah?')
    document.getElementById("formPw").value = '';
  }
}

// ------------------------------------------------
var password = document.getElementById("formPw");
password.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button2").click();
  }
});

var username = document.getElementById("formUser");
username.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button2").click();
  }
});

function games(){
  var y = confirm('Memulai Permainan?')
  if(y == true){
    window.location.replace('./Load/games.html')
  }
}