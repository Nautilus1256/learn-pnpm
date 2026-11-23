import { readFile } from "node:fs/promises";
import dayjs from "dayjs";

const fileUrl = new URL("../data/products.json", import.meta.url);
const products = JSON.parse(await readFile(fileUrl, "utf8"));

for (const product of products) {
  const availableSince = dayjs(product.availableSince).format("YYYY/MM/DD");
  console.log(
    `${product.name}: ${product.price}円 / 販売開始 ${availableSince}`,
  );
}
