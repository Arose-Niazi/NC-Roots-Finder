class FindRoots {
    constructor(start, end, method) {
        let type = "Bi-Section Method";
        if (method == 1)
            type = "Regula Falsi Method";

        printHeading(type, true, "h2");

        this.start = parseFloat(start).toFixed(fixedLength);
        this.end = parseFloat(end).toFixed(fixedLength);
        this.a = equationSolve(start);
        this.b = equationSolve(end);
        this.method = method;


        println("f(a) * f(b) = " + this.a + " * " + this.b +" = "+ (this.a * this.b).toFixed(fixedLength) );
        if (this.a * this.b > 0)
            return printHeading("Can not find roots! As F(a) * F(b) > 0", true, "h3");
        println("As f(a)*f(b) < 0");
        println("There exist a root")

        this.c = 1;
        this.i = 1;
        createTable(["i","a", "f(a)","b", "f(b)","c", "f(c)", "e"]);
        this.find();
        this.oldc = null;
    }

    find()
    {
        if(this.method == 0)
            this.c = this.biSection();
        else
            this.c = this.FalsiMethod();

        this.e = this.relativeErrorFind();
        let atC = equationSolve(this.c);
        addTableRow([this.i++, this.start, this.a, this.end, this.b, this.c, atC, this.e])
        if(rootResultChecker(atC))
            return printHeading("Roots found at " + this.c, true, "h3");

        if(this.a * atC < 0)
        {
            this.end = this.c;
            this.b = atC;
        }
        else
        {
            this.start = this.c;
            this.a = atC;
        }
        this.oldc = this.c
        this.find();
    }

    biSection()
    {
        let y = ((parseFloat(this.start) + parseFloat(this.end)) / 2.0).toFixed(fixedLength);
        return y;
    }

    relativeErrorFind()
    {
        if(this.oldc == null) return "-";
        let y = ((parseFloat(this.c) - parseFloat(this.oldc))/Math.abs(this.c));
        return y.toFixed(fixedLength);
    }

    FalsiMethod()
    {
        return (((this.start*(this.b))-(this.end*this.a))/(this.b-this.a)).toFixed(fixedLength);
    }
}
