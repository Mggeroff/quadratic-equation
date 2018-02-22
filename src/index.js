module.exports = function solveEquation(equation) {
    let regex = /[^\^]\d+/g;

    let input = equation.replace(/[^0-9-+x^0-9]/g, '').match(regex);

    let a = parseInt(input[0]);
    let b = parseInt(input[1]);
    let c = parseInt(input[2]);

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
