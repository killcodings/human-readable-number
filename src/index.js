module.exports = function toReadable(n) {
    var str = n.toString();

    if (parseInt(str) === 0) {
        return "zero";
    }

    let num1_19 = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let num20_90 = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let numb = "";
    let c = [];
    let numbrsName = [];
    c = str.split("");

    let i = c.reverse().map(parseFloat);

    if (i[1] === 1) {
        i[0] += 10;
    }
    if ((numb = num1_19[i[0]])) {
        numbrsName.push(numb);
    }
    if ((numb = num20_90[i[1]])) {
        numbrsName.push(numb);
    }
    if ((numb = num1_19[i[2]])) {
        numbrsName.push(numb + " hundred");
    }
    return numbrsName.reverse().join(" ");
};
