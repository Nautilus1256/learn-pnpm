import stripAnsi from "strip-ansi";

const input = "\u001B[31mコーヒー\u001B[0m";

console.log("入力:", JSON.stringify(input));
console.log("除去後:", JSON.stringify(stripAnsi(input)));
