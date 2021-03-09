

let equation = "(x - (a + 1))(x - b)(x - c)";
let fixedLength = 4;
let a = 0;
let b = 2;
let c = 5;


document.getElementById("equation").innerHTML = equation;
document.getElementById("precision").innerHTML = fixedLength.toString();
document.getElementById("roll").innerHTML = a.toString() + b.toString() + c.toString();

function GetRoots(start, end, method)
{
    new FindRoots(start.value, end.value, method.value);
}

function equationSolve(value)
{
    let x = (value - (a + 1)) *( value - b) * (value - c);
    return (x).toFixed(fixedLength);
}

function clearOutput()
{
    document.getElementById("Output").innerHTML="";
}

