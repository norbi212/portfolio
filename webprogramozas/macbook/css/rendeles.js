var osszeg=600000;
var ram=8;
var tar=512;

function col14(){
    document.getElementById("col14").style.border="rgb(70, 116, 161) 2px solid";
    document.getElementById("col16").style.border="#333 1px solid";
}
function col16(){
    document.getElementById("col16").style.border="rgb(70, 116, 161) 2px solid";
    document.getElementById("col14").style.border="#333 1px solid";
}


function ram8(){
    document.getElementById("ram8").style.border="rgb(70, 116, 161) 2px solid";
    document.getElementById("ram16").style.border="#333 1px solid";
    document.getElementById("ram32").style.border="#333 1px solid";
    ram=8;
    szamol()
}
function ram16(){
    document.getElementById("ram16").style.border="rgb(70, 116, 161) 2px solid";
    document.getElementById("ram8").style.border="#333 1px solid";
    document.getElementById("ram32").style.border="#333 1px solid";
    ram=16;
    szamol()
}
function ram32(){
    document.getElementById("ram32").style.border="rgb(70, 116, 161) 2px solid";
    document.getElementById("ram16").style.border="#333 1px solid";
    document.getElementById("ram8").style.border="#333 1px solid";
    ram=32;
    szamol()
}


function tar512(){
    document.getElementById("tar512").style.border="rgb(70, 116, 161) 2px solid";
    document.getElementById("tar1").style.border="#333 1px solid";
    document.getElementById("tar2").style.border="#333 1px solid";
    tar=512;
    szamol()
}
function tar1(){
    document.getElementById("tar1").style.border="rgb(70, 116, 161) 2px solid";
    document.getElementById("tar512").style.border="#333 1px solid";
    document.getElementById("tar2").style.border="#333 1px solid";
    tar=1;
    szamol()
}
function tar2(){
    document.getElementById("tar2").style.border="rgb(70, 116, 161) 2px solid";
    document.getElementById("tar1").style.border="#333 1px solid";
    document.getElementById("tar512").style.border="#333 1px solid";
    tar=2;
    szamol()
}

function szamol(){
    osszeg=600000
    if(ram==16){osszeg=osszeg+100000}
    if(ram==32){osszeg=osszeg+200000}

    if(tar==1){osszeg=osszeg+100000}
    if(tar==2){osszeg=osszeg+200000}

    osszeg=Math.abs(osszeg)
    osszeg=osszeg.toLocaleString()

    document.getElementById("vegosszeg").innerHTML="Fizetendő összeg: "+osszeg+" Ft"
}

function megvesz(){
    var osszeg=600000;
    osszeg=Math.abs(osszeg)
    osszeg=osszeg.toLocaleString()
    var ram=8;
    var tar=512;
    document.getElementById("vegosszeg").innerHTML="Fizetendő összeg: "+osszeg+" Ft"
    document.getElementById("col14").style.border="#333 1px solid";
    document.getElementById("col16").style.border="#333 1px solid";
    document.getElementById("ram8").style.border="#333 1px solid";
    document.getElementById("ram16").style.border="#333 1px solid";
    document.getElementById("ram32").style.border="#333 1px solid";
    document.getElementById("tar2").style.border="#333 1px solid";
    document.getElementById("tar1").style.border="#333 1px solid";
    document.getElementById("tar512").style.border="#333 1px solid";
    alert("Vásárlás feldolgozva")
}