window.onload = function() {
    var addTotal = document.getElementById("farm-button");
    addTotal.onclick = totalProduction;

function totalProduction(){

    var shadeA = parseInt(document.getElementById("num1").value);
    var shadeB = parseInt(document.getElementById("num2").value);
    var shadeC = parseInt(document.getElementById("num3").value);
    var shadeD = parseInt(document.getElementById("num4").value);
        
    var litres = shadeA + shadeB + shadeC + shadeD;
    
    document.getElementById("milkdisplay").innerHTML = litres + " Liters " ;

    document.getElementById("display-shade-a").innerHTML = "Shade A is "+ shadesA + " Liters " ;
    document.getElementById("display-shade-b").innerHTML = "Shade B is "+ shadesB + " Liters " ;
    document.getElementById("display-shade-c").innerHTML = "Shade C is "+ shadesC + " Liters " ;
    document.getElementById("display-shade-d").innerHTML = "Shade D is "+ shadesD + " Liters " ;

}

    var findIncome = document.getElementById("rate-update");
    findIncome.onclick = incomeOverTime;

function incomeOverTime(){

    var shadeA = parseInt(document.getElementById("num1").value);
    var shadeB = parseInt(document.getElementById("num2").value);
    var shadeC = parseInt(document.getElementById("num3").value);
    var shadeD = parseInt(document.getElementById("num4").value);
    var rate = parseInt(document.getElementById("milkrate").value);

    var totalMilk = shadeA + shadeB + shadeC + shadeD;


    var day = 1;
    var week = 7;
    var month = 31;
    var year = 365;

        
        var dailyIncome = day * rate * litres;
        var weeklyIncome = week * rate * litres;
        var monthlyIncome = month * rate * litres;
        var yearlyIncome = year * rate * litres;

    document.getElementById("display-2").innerHTML = dailyIncome + " KSH " ;
    document.getElementById("display-3").innerHTML = monthlyIncome + " KSH " ;
    document.getElementById("display-4").innerHTML = weeklyIncome + " KSH " ;
    document.getElementById("display-5").innerHTML = yearlyIncome + " KSH " ;

}