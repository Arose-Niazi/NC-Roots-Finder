let equation = "xCosx - 2x<sup>2</sup> + 3x-1";
let derivative = "e<sup>x</sup>- ln(2)/2<sup>x</sup>-2sinx";
let fixedLength = 5;
let a = 0;
let b = 1;
let c = 0;


document.getElementById("equation").innerHTML = equation;
document.getElementById("precision").innerHTML = (-fixedLength).toString();
document.getElementById("roll").innerHTML = a.toString() + b.toString() + c.toString();

function GetRoots(start, end, method)
{
    if(parseInt(start.value) > parseInt(end.value))
    {
        let x = end;
        end = start;
        start = x;
        console.log("Switched");
    }
    if(method.value == 2)
    {
        printHeading(derivative,false, "h3");
        return new Newton(start.value);
    }

    if(method.value == 3)
        return new Secent(start.value, end.value);

    new FindRoots(start.value, end.value, method.value);
}

function equationSolve(value)
{
    let x = value*Math.cos(value) - 2 * Math.pow(value,2) + 3*value - 1;

    return (x).toFixed(fixedLength);
}

function equationDerivativeSolve(value)
{
    let x = Math.pow(Math.E,value) - (Math.log(2)/Math.pow(2,value)) - (2*Math.sin(value));

    return (x).toFixed(fixedLength);
}

function clearOutput()
{
    document.getElementById("Output").innerHTML="";
}

