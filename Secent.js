class Secent {
    constructor(start, end) {

        printHeading("Secent Method", true, "h2");

        this.start = parseFloat(start).toFixed(fixedLength);
        this.end = parseFloat(end).toFixed(fixedLength);
        this.a = equationSolve(start);
        this.b = equationSolve(end);

        this.c = 1;
        this.i = 1;
        createTable(["n","x<sub>n-1</sub>", "f(x<sub>n-1</sub>)","x<sub>n</sub>", "f(x<sub>n</sub>)","x<sub>n+1</sub>", "f(x<sub>n+1</sub>)", "e"]);
        this.oldc = null;
        this.find();
    }

    find()
    {
        this.c = this.getNext();
        this.e = this.relativeErrorFind();
        let atC = equationSolve(this.c);
        addTableRow([this.i++, this.start, this.a, this.end, this.b, this.c, atC, this.e])
        if(rootResultChecker(atC))
            return printHeading("Roots found at " + this.c, true, "h3");
        if(this.b.includes(atC,0))
            return printHeading("Roots found at " + this.a, true, "h3");

        this.start = this.end;
        this.a = this.b;
        this.end = this.c;
        this.b = atC;
        this.oldc = this.c
        this.find();
    }

    relativeErrorFind()
    {
        if(this.oldc == null) return "-";
        let y = ((parseFloat(this.c) - parseFloat(this.oldc))/Math.abs(this.c));
        return y.toFixed(fixedLength);
    }

    getNext()
    {
        let y = (parseFloat(this.end) - (((parseFloat(this.end) - parseFloat(this.start)) * this.b)/(this.b - this.a))).toFixed(fixedLength);
        console.log("y =>" + y);
        return y;
    }
}
