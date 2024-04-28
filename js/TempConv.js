function TempConv()
{
    var inp = eval(document.getElementById('number').value);
    var Result;
    var x = document.getElementById("op1").selectedIndex;
    var y = document.getElementById("op2").selectedIndex;
     opt=x;
     opt2=y;
    if(opt=="0" && opt2=="1")
    {
        Result = ((inp*1.8)+32).toFixed(2) + "°F";
    }
    else if(opt=="0" && opt2=="2")
    {
        Result = (inp + 273.15).toFixed(2) + "K";
    }
    else if(opt=="1" && opt2=="2")
    {
        Result = (((inp - 32)*(5/9))+273.15).toFixed(2) + "K";
    }
    else if(opt=="1" && opt2=="0")
    {
        Result = ((inp-32)*(5/9)).toFixed(2) + "°C";
    }
    else if(opt=="2" && opt2=="1")
    {
        Result = (((inp - 273.15)*(9/5))+32).toFixed(2) + "°F";
    }
    else if(opt=="2" && opt2=="0")
    {
        Result = (inp - 273.15).toFixed(2) + "°C";
    }


    if(inp==undefined || null)
    {
        alert("enter some value");
        document.getElementById("result").innerHTML = "   "; 

    }
    else if((inp!=null) && (opt==opt2))
    {
        alert("Don't choose same option for convert");
        document.getElementById("result").innerHTML = "   "; 
    }
    else
    {
        document.getElementById("result").innerHTML = "   " + Result; 
    }
    
}
 
