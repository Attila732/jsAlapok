    alert("HellĂł vilĂˇg!");
    document.write("HellĂł vilĂˇg");
    console.log("Lefutott a JS");
    document.getElementById("szoveg").innerHTML="BekezdĂ©sbe Ă­rok";

function szamolas() {
    var muvjel=document.getElementById("muv").value;
    console.log(muvjel);
     if (muvjel === "+") {
        osszead();
     }else if (muvjel==="-"){
        kivon();
    }else if (muvjel==="/"){
        eloszt();
    }else if (muvjel==="*") {
        szoroz();
    }else {
        alert("Nem megfelelĹ‘ a mĹ±veleti jel!");
    }
}

function osszead() {
    var valtA=Number(document.getElementById("a").value);
    var valtB=Number(document.getElementById("b").value);
    //console.log(valtA);
    //console.log(valtB);
    document.getElementById("szoveg").innerHTML=valtA+valtB;
}

function kivon() {
    var valtA=Number(document.getElementById("a").value);
    var valtB=Number(document.getElementById("b").value);
    //console.log(valtA);
    //console.log(valtB);
    document.getElementById("szoveg").innerHTML=valtA-valtB;
}

function eloszt() {
    var valtA=Number(document.getElementById("a").value);
    var valtB=Number(document.getElementById("b").value);
    //console.log(valtA);
    //console.log(valtB);
    document.getElementById("szoveg").innerHTML=valtA/valtB;
}

function szoroz() {
    var valtA=Number(document.getElementById("a").value);
    var valtB=Number(document.getElementById("b").value);
    //console.log(valtA);
    //console.log(valtB);
    document.getElementById("szoveg").innerHTML=valtA*valtB;
}

function udvozol() {
    var valtNev=document.getElementById("nev1").value;
    alert("Szia "+valtNev);
}

