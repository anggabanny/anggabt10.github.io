var storedName = localStorage.getItem('username');
if(storedName){
    document.getElementById('UsernameNick').innerHTML = storedName;
}

var rIndex,
table = document.getElementById("table1");

function checkEmptyInput(){
var isEmpty = false,
    id = document.getElementById("valueId").value;
    nama = document.getElementById("valueName").value;
    nik = document.getElementById("valueNik").value;
    kelamin = document.getElementById("valueGender").value;
    tempatLahir = document.getElementById("valueTL").value;
    tanggalLahir = document.getElementById("valueTL1").value;
    agama = document.getElementById("valueAgama").value;
    pendidikan = document.getElementById("valuePendidikan").value;
    pekerjaan = document.getElementById("valuePekerjaan").value;

    if((id == '')&&(nama == '')&&(nik == '')&&(kelamin == '')&&(tempatLahir == '')&&
        (tanggalLahir == '')&&(agama == '')&&(pendidikan == '')&&(pekerjaan == '')){
        alert('Mohon Dilengkapi!');
        isEmpty = true;
    }
    // else if(id == ''){
    //     alert('Mohon isi kolom ID!');
    //     isEmpty = true;
    // }
    else if(nama == ''){
        alert('mohon isi kolom Nama!');
        isEmpty =  true;
    } else if(nik == ''){
        alert('mohon isi kolom NIK!');
        isEmpty =  true;
    } else if(kelamin == ''){
        alert('mohon isi kolom Kelamin!');
        isEmpty =  true;
    } else if(tempatLahir == ''){
        alert('mohon isi kolom Tempat Lahir!');
        isEmpty =  true;
    } else if(tanggalLahir == ''){
        alert('mohon isi kolom Tanggal Lahir!');
        isEmpty =  true;
    } else if(agama == ''){
        alert('mohon isi kolom Agama!');
        isEmpty =  true;
    } else if(pendidikan == ''){
        alert('mohon isi kolom Pendidikan!');
        isEmpty =  true;
    } else if(pekerjaan == ''){
        alert('mohon isi kolom pekerjaan!');
        isEmpty =  true;
    }
    return isEmpty
}
var i = 2;
function addTableRow(){
    if(!checkEmptyInput()){
    var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0);
        cell2 = newRow.insertCell(1);
        cell3 = newRow.insertCell(2);
        cell4 = newRow.insertCell(3);
        cell5 = newRow.insertCell(4);
        cell6 = newRow.insertCell(5);
        cell7 = newRow.insertCell(6);
        cell8 = newRow.insertCell(7);
        cell9 = newRow.insertCell(8);

    // id = document.getElementById("valueId").value;
    nama = document.getElementById("valueName").value;
    nik = document.getElementById("valueNik").value;
    kelamin = document.getElementById("valueGender").value;
    tempatLahir = document.getElementById("valueTL").value;
    tanggalLahir = document.getElementById("valueTL1").value;
    agama = document.getElementById("valueAgama").value;
    pendidikan = document.getElementById("valuePendidikan").value;
    pekerjaan = document.getElementById("valuePekerjaan").value;

        cell1.innerHTML = i;
        i++;
        cell2.innerHTML = nama;
        cell3.innerHTML = nik;
        cell4.innerHTML = kelamin;
        cell5.innerHTML = tempatLahir;
        cell6.innerHTML = tanggalLahir;
        cell7.innerHTML = agama;
        cell8.innerHTML = pendidikan;
        cell9.innerHTML = pekerjaan;
    selectedRowToInput();
    }
}
function selectedRowToInput(){
    for(var i = 1; i < table.rows.length; i++){
        table.rows[i].onclick = function(){
            rIndex = this.rowIndex;
            console.log(rIndex);            
            document.getElementById("valueId").value = this.cells[0].innerHTML;
            document.getElementById("valueName").value = this.cells[1].innerHTML;
            document.getElementById("valueNik").value = this.cells[2].innerHTML;
            document.getElementById("valueGender").value = this.cells[3].innerHTML;
            document.getElementById("valueTL").value = this.cells[4].innerHTML;
            document.getElementById("valueTL1").value = this.cells[5].innerHTML;
            document.getElementById("valueAgama").value = this.cells[6].innerHTML;
            document.getElementById("valuePendidikan").value = this.cells[7].innerHTML;
            document.getElementById("valuePekerjaan").value = this.cells[8].innerHTML;

            document.getElementById('edit1').style.display = 'block';
            document.getElementById('delete1').style.display = 'block';
            document.getElementById('buttonSubmit1').style.display = 'none';
            document.getElementById('buttonReset1').style.display = 'none';
            document.getElementById('hide2').style.width = '1730px';
        };
    }
}
selectedRowToInput();
function editHtmlTbleSelectedRow(){
var id = document.getElementById("valueId").value;
    nama = document.getElementById("valueName").value;
    nik = document.getElementById("valueNik").value;
    kelamin = document.getElementById("valueGender").value;
    tempatLahir = document.getElementById("valueTL").value;
    tanggalLahir = document.getElementById("valueTL1").value;
    agama = document.getElementById("valueAgama").value;
    pendidikan = document.getElementById("valuePendidikan").value;
    pekerjaan = document.getElementById("valuePekerjaan").value;

    if(!checkEmptyInput()){
        table.rows[rIndex].cells[0].innerHTML = id;
        table.rows[rIndex].cells[1].innerHTML = nama;
        table.rows[rIndex].cells[2].innerHTML = nik;
        table.rows[rIndex].cells[3].innerHTML = kelamin;
        table.rows[rIndex].cells[4].innerHTML = tempatLahir;
        table.rows[rIndex].cells[5].innerHTML = tanggalLahir;
        table.rows[rIndex].cells[6].innerHTML = agama;
        table.rows[rIndex].cells[7].innerHTML = pendidikan;
        table.rows[rIndex].cells[8].innerHTML = pekerjaan;
    }
}

function removeSelectedRow(){
    table.deleteRow(rIndex);
        document.getElementById("valueId").value = "";
        document.getElementById("valueName").value = "";
        document.getElementById("valueNik").value = "";
        document.getElementById("valueGender").value = "";
        document.getElementById("valueTL").value = "";
        document.getElementById("valueTL1").value = "";
        document.getElementById("valueAgama").value = "";
        document.getElementById("valuePendidikan").value = "";
        document.getElementById("valuePekerjaan").value = "";
}

var button1 = document.getElementById('edit1');
button1.addEventListener('click',function(){
    document.getElementById('buttonSubmit1').style.display = 'block';
    document.getElementById('buttonReset1').style.display = 'block';
    document.getElementById('edit1').style.display = 'none';
    document.getElementById('delete1').style.display = 'none';
    document.getElementById('hide2').style.width = '1620px';
})
var button2 = document.getElementById('delete1');
button2.addEventListener('click',function(){
    document.getElementById('buttonSubmit1').style.display = 'block';
    document.getElementById('buttonReset1').style.display = 'block';
    document.getElementById('edit1').style.display = 'none';
    document.getElementById('delete1').style.display = 'none';
    document.getElementById('hide2').style.width = '1620px';
})

function PTM(){
    var x = confirm('page ini tidak di lengkapi dengan database server, apapun yang anda input akan kembali te-Reset.. yakin meninggalkan laman ini?');
    if(x == true){
        window.location.replace('../Load/ptm.html')
    }
}

function logout(){
    var x = confirm('anda yakin ingin keluar dan kembali ke homepage?');
    if(x == true){
        window.location.replace('../Load/home.html');
    }
}