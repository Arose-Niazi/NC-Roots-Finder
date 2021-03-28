let equation = "sin(x) - e<sup>-x</sup>";
let derivative = "cos(x) + e<sup>-x</sup>";
let fixedLength = 5;
let a = 0;
let b = 1;
let c = 0;
let toCheckLength = 5;


document.getElementById("equation").innerHTML = equation;

function GetRoots(start, end, method, Precision, SolveUpto, RollNumber)
{
    printHeading("Precision: 10<sup>-"+Precision.value+"</sup>",false, "h3");
    printHeading("Solve Upto: 10<sup>-"+SolveUpto.value+"</sup>",false, "h3");
    printHeading("Roll Number: "+RollNumber.value,false, "h3");
    RollNumber = RollNumber.value.toString().split("");
    a = parseInt(RollNumber[0]);
    b = parseInt(RollNumber[1]);
    c = parseInt(RollNumber[2]);
    console.log(a);console.log(b);console.log(c);
    toCheckLength = parseInt(SolveUpto.value);
    fixedLength = parseInt(Precision.value);

    if(parseInt(start.value) > parseInt(end.value))
    {
        let x = end;
        end = start;
        start = x;
    }
    if(method.value == 2)
    {
        printHeading("Derivative: "+derivative,false, "h3");
        new Newton(start.value);
    }
    else if(method.value == 3)
    {
        new Secent(start.value, end.value);
    }
    else
    {
        new FindRoots(start.value, end.value, method.value);
    }

    println("<hr>");
}

function equationSolve(x)
{
    let y = Math.sin(x) - Math.pow(Math.E, -x);

    return (y).toFixed(fixedLength);
}

function equationDerivativeSolve(x)
{
    let y = Math.cos(x) + Math.pow(Math.E, -x);

    return (y).toFixed(fixedLength);
}

function clearOutput()
{
    document.getElementById("Output").innerHTML="";
}

function rootResultChecker(value)
{
    //console.log("before ->" + value);
    value = value.toString().slice(0, value.toString().length - (fixedLength - toCheckLength));
    //console.log("after ->" + value);
    value = parseFloat(value);

    if(!(value < 0 || value > 0))
        return true;
    return false;
}

