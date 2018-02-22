module.exports = function solveEquation(equation) {
    let regex = /[^\^]\d+/g;
    let numMatch;
    let tempArr = [];
    while (numMatch = regex.exec(equation.replace(/[^0-9-+x]/g, ''))) {
        tempArr.push(numMatch[0]);
    }

    let a = tempArr[0];
    let b = tempArr[2];
    let c = tempArr[3];

    let Discriminant = (Math.pow(b, 2) - 4 * a * c);

    let x1 = Math.round(((-b + Math.round(Math.sqrt(Discriminant))) / (2 * a)));
    let x2 = Math.round(((-b - Math.round(Math.sqrt(Discriminant))) / (2 * a)));

    let result = [];
    result.push(x1);
    result.push(x2);

    return result.sort(function (a, b) {
        return a - b;
    })
}
