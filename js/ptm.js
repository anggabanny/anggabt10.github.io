var storedName = localStorage.getItem('username');
if(storedName){
    document.getElementById('UsernameNick').innerHTML = storedName;
}

var close = document.getElementById('Close11');
close.addEventListener('click', function(){
    document.getElementById('hide1').style.display = 'none';
    document.getElementById('boxInputNilai').style.display = 'none';
    document.getElementById('nilaiKu4').style.display = 'none';
    document.getElementById('NilaiIn').style.display = 'none';
    document.getElementById('tableInfo1').style.display = 'none';
    document.getElementById('tableInfo2').style.display = 'none';
    document.getElementById('table1').style.display = 'block';
})

// ----------------------
var rIndex,
table = document.getElementById("table1");

function checkEmptyInput(){
var isEmpty = false,
    nama = document.getElementById("valueName").value,
    age = document.getElementById("valueAge").value,
    gender = document.getElementById("valueGender").value;
    kelas = document.getElementById("valueClass").value;

    if((nama === '')&&(age ==='')&&(gender === '')&&(kelas === '')){
        alert('harap lengkapi isi colom input');
        isEmpty = true;
    } else if(nama === ""){
        alert("isi kolom nama!");
        isEmpty = true;
    } else if(age === ""){
        alert("isi kolom umur!");
        isEmpty = true;
    } else if(gender === ""){
        alert("pilih kolom kelamin");
        isEmpty = true;
    } else if(kelas === ""){
        alert("pilih kolom pendidikan");
        isEmpty = true;
    } else if(age !== ''){
        if(age < 1){
            alert('input umur 1 - 20 tahun')
            isEmpty = true;
        } else if(age > 20){
            alert('input umur 1 - 20 tahun')
            isEmpty = true;
        }
    }
    return isEmpty;
}

function addHtmlTableRow(){
    if(!checkEmptyInput()){
    var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0);
        cell1.style.width = '170px';
        cell2 = newRow.insertCell(1);
        cell3 = newRow.insertCell(2);
        cell4 = newRow.insertCell(3);
        nama = document.getElementById("valueName").value;
        age = document.getElementById("valueAge").value;
        gender = document.getElementById("valueGender").value;
        kelas = document.getElementById("valueClass").value;

            cell1.innerHTML = nama;
            cell2.innerHTML = age + ' th';
            cell3.innerHTML = gender;
            cell4.innerHTML = kelas;

            selectedRowToInput();
    }
}
function selectedRowToInput(){
    for(var i = 1; i < table.rows.length; i++){
        table.rows[i].onclick = function(){
            rIndex = this.rowIndex;
            console.log(rIndex);
            
            document.getElementById("namaX").value = this.cells[0].innerHTML;
            document.getElementById("ageX").value = this.cells[1].innerHTML;
            document.getElementById("genderX").value = this.cells[2].innerHTML;
            document.getElementById("kelasX").value = this.cells[3].innerHTML;

            document.getElementById('hide1').style.display = 'block';
            document.getElementById('boxInputNilai').style.display = 'block';
            document.getElementById('nilaiKu4').style.display = 'block';
            document.getElementById('NilaiIn').style.display = 'block';
            document.getElementById('tableInfo1').style.display = 'block';
            document.getElementById('tableInfo2').style.display = 'block';
            document.getElementById('table1').style.display = 'none';
        };
    }
}
selectedRowToInput();
function editHtmlTbleSelectedRow(){
var nama1 = document.getElementById("namaX").value;
    age1 = document.getElementById("ageX").value;
    gender1 = document.getElementById("genderX").value;
    kelas1 = document.getElementById("kelasX").value;
    
    if(!checkEmptyInput()){
        table.rows[rIndex].cells[0].innerHTML = nama1;
        table.rows[rIndex].cells[1].innerHTML = age1;
        table.rows[rIndex].cells[2].innerHTML = gender1;
        table.rows[rIndex].cells[3].innerHTML = kelas1;

        document.getElementById('hide1').style.display = 'none';
        document.getElementById('boxInputNilai').style.display = 'none';
        document.getElementById('nilaiKu4').style.display = 'none';
        document.getElementById('NilaiIn').style.display = 'none';
        document.getElementById('tableInfo1').style.display = 'none';
        document.getElementById('tableInfo2').style.display = 'none';
        document.getElementById('table1').style.display = 'block';
    }
}

function removeSelectedRow(){
    table.deleteRow(rIndex);
    document.getElementById("namaX").value = "";
    document.getElementById("ageX").value = "";
    document.getElementById("genderX").value = "";
    document.getElementById("kelasX").value = "";
    
    document.getElementById('hide1').style.display = 'none';
    document.getElementById('boxInputNilai').style.display = 'none';
    document.getElementById('nilaiKu4').style.display = 'none';
    document.getElementById('NilaiIn').style.display = 'none';
    document.getElementById('tableInfo1').style.display = 'none';
    document.getElementById('tableInfo2').style.display = 'none';
    document.getElementById('table1').style.display = 'block';
}
// -----------------------------------------------
    // 
        // 
            // ENTER
        // 
    //
//  -----------------------------------------
var rIndexX,
tableOne = document.getElementById("NilaiIn");

function checkEmptyInput1(){
var isEmpty1 = false,
    pelajaran = document.getElementById("nilaiKu").value;
    nilai = document.getElementById("nilaiKu1").value;

    if(pelajaran === ""){
        alert("pilih pelajaran");
        isEmpty1 = true;
    } else if(nilai === ""){
        alert("isi kolom nilai");
        isEmpty1 = true;
    } else if(nilai < 0){
        alert('input nilai salah')
        isEmpty1 = true;
    } else if(nilai > 100){
        alert('input nilai salah')
        isEmpty1 = true;
    }
    return isEmpty1;
}

function addHtmlTableRow1(){
    if(!checkEmptyInput1()){
    var newRow = tableOne.insertRow(1),
        cell1 = newRow.insertCell(0);
        cell1.style.width = '170px';
        cell2 = newRow.insertCell(1);
        cell3 = newRow.insertCell(2);
        cell4 = newRow.insertCell(3);

        pelajaran = document.getElementById("nilaiKu").value;
        nilai = document.getElementById("nilaiKu1").value;

            cell1.innerHTML = pelajaran;
            cell2.innerHTML = nilai;
            if ((nilai > 0)&&(nilai < 20)) {
                cell3.innerHTML = 1;
                cell4.innerHTML = 'Rp.' + 10000;
            } else if ((nilai > 19)&&(nilai < 40)) {
                cell3.innerHTML = 2;
                cell4.innerHTML = 'Rp.' + 20000;
            } else if ((nilai > 39)&&(nilai < 60)) {
                cell3.innerHTML = 3;
                cell4.innerHTML = 'Rp.' + 30000;
            } else if ((nilai > 59)&&(nilai < 80)) {
                cell3.innerHTML = 4;
                cell4.innerHTML = 'Rp.' + 40000;
            } else if ((nilai > 79)&&(nilai < 101)) {
                cell3.innerHTML = 5;
                cell4.innerHTML = 'Rp.' + 50000;
            }
            
        selectedRowToInput1();
    }
}

function selectedRowToInput1(){
    for(var i = 1; i < tableOne.rows.length; i++){
        tableOne.rows[i].onclick = function(){
            rIndexX = this.rowIndex;
            document.getElementById("nilaiKu").value = this.cells[0].innerHTML;
            document.getElementById("nilaiKu1").value = this.cells[1].innerHTML;

            document.getElementById('nilaiKu4').style.display = 'none';
            document.getElementById('nilaiKu5').style.display = 'block';
            document.getElementById('nilaiKu6').style.display = 'block';
        };
    }
}

selectedRowToInput1();
function editHtmlTbleSelectedRow1(){
var pelajaran = document.getElementById("nilaiKu").value;
    nilai = document.getElementById("nilaiKu1").value;
    
    if(!checkEmptyInput1()){
        tableOne.rows[rIndexX].cells[0].innerHTML = pelajaran;
        tableOne.rows[rIndexX].cells[1].innerHTML = nilai;

        document.getElementById('nilaiKu4').style.display = 'block';
        document.getElementById('nilaiKu5').style.display = 'none';
        document.getElementById('nilaiKu6').style.display = 'none';
    }
}

function removeSelectedRow1(){
    tableOne.deleteRow(rIndexX);
    document.getElementById("nilaiKu").value = "";
    document.getElementById("nilaiKu1").value = "";
    document.getElementById("nilaiKu2").value = "";
    document.getElementById("nilaiKu3").value = "";

    document.getElementById('nilaiKu4').style.display = 'block';
    document.getElementById('nilaiKu5').style.display = 'none';
    document.getElementById('nilaiKu6').style.display = 'none';
}
// .............................

function logout(){
    var x = confirm('anda yakin ingin keluar dan kembali ke homepage?');
    if(x == true){
        window.location.replace('../Load/home.html');
    }
}

function pindah1(){
    var x = confirm('saya tidak memasang database server pada laman ini.. yakin pindah?');
    if(x == true){
        window.location.replace('../Load/fc.html');
    }
}