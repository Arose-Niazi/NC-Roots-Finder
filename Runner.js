//Variables to be used
let fixedLength = 5;
let a = b = c = d = e = f = 0;
let toCheckLength = 5;
let scope;
let equation;
let derivative;
const allConstants = ["a","b", "c", "d", "e", "f"];

const keyValue = (input) => Object.entries(input).forEach(([key,value]) => {
    println(key +" = "+ value);
});

function preformSettings(values, Precision, SolveUpto, eq)
{

    values = values.value.toString();
    scope = {};
    if(values != "")
    {
        values =values.split(",");
        for(let i = 0; i<values.length; i++)
        {
            scope[allConstants[i]] =  parseInt(values[i]);
        }
    }
    
    toCheckLength = parseInt(SolveUpto.value);
    fixedLength = parseInt(Precision.value);
    equation = eq.value;
    console.log(scope);
}

function GetRoots(start, end, method, Precision, SolveUpto, values, eq)
{
    preformSettings(values, Precision, SolveUpto, eq);
    printHeading("Precision: 10<sup>-"+fixedLength+"</sup>",false, "h3");
    printHeading("Solve Upto: 10<sup>-"+toCheckLength+"</sup>",false, "h3");
   
    printHeading("Equation: "+math.parse(equation).toHTML(),false, "h3");
    printHeading("Values: ",false, "h3");
    keyValue(scope);

    equation = math.simplify(equation,scope).toString();
    printHeading("Simplified Equation: "+math.parse(equation).toHTML(),false, "h3");
    if(parseInt(start.value) > parseInt(end.value))
    {
        let x = end;
        end = start;
        start = x;
    }
    if(method.value == 2)
    {
        derivative = getDerivaite();
        printHeading("Derivative: "+math.parse(derivative).toHTML(),false, "h3");
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
    return math.evaluate(equation, {x}).toFixed(fixedLength);  
}

function getDerivaite()
{
    return math.simplify(math.derivative(equation, "x")).toString();
}

function equationDerivativeSolve(x)
{
    return math.evaluate(derivative, {x}).toFixed(fixedLength);  
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

