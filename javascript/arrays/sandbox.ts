import chalk from "chalk";
import StaticArray from "./StaticArray";
import UnsortedArray from "./UnsortedArray";

function arrayBufferSandbox() {
  console.log(chalk.blue.bold.bgYellowBright("ARRAY BUFFER SANDBOX"));
  const buffer = new ArrayBuffer(6);
  const a8View = new Uint8Array(buffer);
  const a16View = new Uint16Array(buffer);

  console.log(buffer);
  console.log(a8View);

  a8View[0] = 45;
  a8View[2] = 45;

  console.log(a8View);
  console.log(a16View);
  console.log(buffer);

  a16View[2] = 17733;
  console.log(a8View);
  console.log(a16View);
  console.log(buffer);
}

function staticArraySandbox() {
  console.log(chalk.blue.bold.bgYellowBright("STATIC ARRAY SANDBOX"));
  const arr = new StaticArray(6, "I");
  arr.set(0, 259);

  console.log(arr.get(0));
  console.log(arr);
  // console.log(arr.length);
}

function unsortedArraySandbox() {
  console.log(chalk.blue.bold.bgYellowBright("UNSORTED ARRAY SANDBOX"));
  const arr = new UnsortedArray(8, "B");
}
// arrayBufferSandbox();
// staticArraySandbox();
unsortedArraySandbox();
