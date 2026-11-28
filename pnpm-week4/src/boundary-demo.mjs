import ansiRegex from "ansi-regex";

const input = "\u001B[31m赤\u001B[0m";

console.log(ansiRegex().test(input));
