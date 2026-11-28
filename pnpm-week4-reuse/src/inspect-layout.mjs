import { lstatSync, realpathSync } from "node:fs";
import { dirname, join } from "node:path";

const stripReal = realpathSync("node_modules/strip-ansi");
const ansiEntry = join(dirname(stripReal), "ansi-regex");

console.log("strip-ansi の実体:", stripReal);
console.log("ansi-regex の入口:", ansiEntry);
console.log("入口は symlink:", lstatSync(ansiEntry).isSymbolicLink());
console.log("ansi-regex の実体:", realpathSync(ansiEntry));
