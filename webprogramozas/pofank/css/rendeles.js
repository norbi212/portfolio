var osszeg=0;
var lista="";

function kupon(){
    var kod=prompt("Adja meg a kedvezmény kódot (fank123)");
    if(kod=="fank123"){
        osszeg=osszeg-600;
        document.getElementById("ar").innerHTML="Ár: "+osszeg+"Ft";
        lista=lista+"-600Ft kedvezmény"+"<br>";
        document.getElementById("lista").innerHTML=lista;
    }
    return osszeg,kod,lista;
}
function rendeles(){
    lista="";
    osszeg=0;
    document.getElementById("lista").innerHTML=lista;
    document.getElementById("ar").innerHTML="";
    alert("Rendelés sikeresen leadva")
    return osszeg,lista;
}



function d_c(){
    osszeg=osszeg+900;
    lista=lista+"1x Csokis Fánk 900Ft"+"<br>";
    document.getElementById("lista").innerHTML=lista;
    document.getElementById("ar").innerHTML="Ár:  "+osszeg+"Ft";
    return osszeg,lista;
}
function d_v(){
    osszeg=osszeg+900;
    lista=lista+"1x Vaníliás Fánk 900Ft"+"<br>";
    document.getElementById("lista").innerHTML=lista;
    document.getElementById("ar").innerHTML="Ár:  "+osszeg+"Ft";
    return osszeg,lista;
}
function d_o(){
    osszeg=osszeg+900;
    lista=lista+"1x Oreós Fánk 900Ft"+"<br>";
    document.getElementById("lista").innerHTML=lista;
    document.getElementById("ar").innerHTML="Ár:  "+osszeg+"Ft";
    return osszeg,lista;
}
function d_s(){
    osszeg=osszeg+900;
    lista=lista+"1x Epres Fánk 900Ft"+"<br>";
    document.getElementById("lista").innerHTML=lista;
    document.getElementById("ar").innerHTML="Ár:  "+osszeg+"Ft";
    return osszeg,lista;
}
function d_t(){
    osszeg=osszeg+900;
    lista=lista+"1x Tiramisu Fánk 900Ft"+"<br>";
    document.getElementById("lista").innerHTML=lista;
    document.getElementById("ar").innerHTML="Ár:  "+osszeg+"Ft";
    return osszeg,lista;
}
function d_k(){
    osszeg=osszeg+900;
    lista=lista+"1x Karamellás Fánk 900Ft"+"<br>";
    document.getElementById("lista").innerHTML=lista;
    document.getElementById("ar").innerHTML="Ár:  "+osszeg+"Ft";
    return osszeg,lista;
}
function d_f(){
    osszeg=osszeg+900;
    lista=lista+"1x Sport Fánk 900Ft"+"<br>";
    document.getElementById("lista").innerHTML=lista;
    document.getElementById("ar").innerHTML="Ár:  "+osszeg+"Ft";
    return osszeg,lista;
}