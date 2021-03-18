class Newton {
    constructor(start, end) {
        printHeading("Newton Ramphson Method", true, "h2");

        this.a = parseFloat(start).toFixed(fixedLength);
        createTable(["i","a", "f(a)","f'(a)", "b", 'f(b)']);
        this.i = 1;

        this.funSolve = equationSolve(this.a);
        this.funDeriSolve =  equationDerivativeSolve(this.a);
        this.solve();
    }

    solve()
    {
        if(!(this.funDeriSolve < 0 || this.funDeriSolve > 0))
            return printHeading("Roots is parallel to" + this.a, true, "h3");

        this.b = this.calculate(this.a);
        let atC = equationSolve(this.b);
        if(this.funSolve.includes(atC,0))
            return printHeading("Roots found at " + this.a, true, "h3");
        addTableRow([this.i++, this.a, this.funSolve, this.funDeriSolve, this.b, atC]);
        if(!(atC < 0 || atC > 0))
            return printHeading("Roots found at " + this.b, true, "h3");
        
        this.a = this.b;
        this.funSolve = atC;
        this.funDeriSolve = equationDerivativeSolve(this.a);
        this.solve();
    }

    calculate(val)
    {
        let y = val - (this.funSolve / this.funDeriSolve);
        y = y.toFixed(fixedLength);
        return y;
    }

}