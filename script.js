function totalproduction(){
    var shadesA=parseInt(document.getElementById("num1").value);
    var shadesB=parseInt(document.getElementById("num2").value);
    var shadesC=parseInt(document.getElementById("num3").value);
    var shadesD=parseInt(document.getElementById("num4").value);
    var litres= shadesA+shadesB+shadesC+shadesD;
    document.getElementById("Litres").innerHTML=litres + "litres";

    document.getElementById("display-shade-a").innerHTML = "Shade A is "+ shadeA + " Liters " ;
    document.getElementById("display-shade-b").innerHTML = "Shade B is "+ shadeB + " Liters " ;
    document.getElementById("display-shade-c").innerHTML = "Shade C is "+ shadeC + " Liters " ;
    document.getElementById("display-shade-d").innerHTML = "Shade D is "+ shadeD + " Liters " ;
}

