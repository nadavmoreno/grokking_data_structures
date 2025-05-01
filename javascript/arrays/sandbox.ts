import chalk from "chalk";
import StaticArray from "./StaticArray";
import UnsortedArray from "./UnsortedArray";

function arrayBufferSandbox() {
  console.log(chalk.blue.bold("ARRAY BUFFER SANDBOX"));
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
  console.log(chalk.blue.bold("STATIC ARRAY SANDBOX"));
  const arr = new StaticArray(6, "B");
  arr.setValue(0, 28);

  console.log(arr.getValue(0));
  // console.log(arr);
  console.log(arr.length);
}

function unsortedArraySandbox() {
  console.log(chalk.blue.bold("UNSORTED ARRAY SANDBOX"));
  const arr = new UnsortedArray(8, "B");
  arr.insert(9);
  arr.insert(33);
  arr.insert(33);
  arr.insert(33);
  arr.insert(33);
  arr.insert(33);
  arr.insert(33);
  arr.insert(33);
  arr.insert(33);
  // arr.insert(33);
  // arr.insert(33);
}
// arrayBufferSandbox();
// staticArraySandbox();
unsortedArraySandbox();
