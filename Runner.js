

let equation = "e<sup>-x</sup> + cos(x) - 1";
let fixedLength = 3;

document.getElementById("equation").innerHTML = equation;
document.getElementById("precision").innerHTML = fixedLength;

function GetRoots(start, end, method)
{
    new FindRoots(start.value, end.value, method.value);
}

function equationSolve(value)
{
    let x = (Math.pow(Math.E,-value) + Math.cos(value) - 1);
    return (x).toFixed(fixedLength);
}

function clearOutput()
{
    document.getElementById("Output").innerHTML="";
}

