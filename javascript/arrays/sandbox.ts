import chalk from "chalk";
import StaticArray from "./StaticArray";
import UnsortedArray from "./unsorted-array/UnsortedArray";
import SortedArray from "./sorted-array/SortedArray";

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
  console.log(arr.length);
}

function unsortedArraySandbox() {
  console.log(chalk.blue.bold("UNSORTED ARRAY SANDBOX"));
  const arr = new UnsortedArray(8, "B");
  arr.insert(9);
  arr.insert(33);
  arr.insert(43);
  arr.insert(53);
  arr.delete(1);
  // arr.insert(99);
  // arr.insert(33);
  // arr.insert(33);
  // arr.insert(33);
  // arr.insert(33);
  // arr.insert(33);
  // arr.insert(33);
  // arr.insert(33);
  // arr.insert(33);
  // console.log(arr.length);
  // console.log(arr.print());
  // arr.delete(0);
  // console.log(arr.length);
  // console.log(arr.print());
  // console.log(arr.find(33));
  arr.traverse((value) => console.log(value));
}

function sortedArraySandbox() {
  console.log(chalk.blue.bold("SORTED ARRAY SANDBOX"));
  const arr = new SortedArray(8, "B");
  arr.insert(13);
  // arr.insert(43);
  // arr.insert(9);
  // arr.insert(3);
  // arr.delete(0);
  arr.insert(99);
  arr.insert(33);
  arr.insert(73);
  arr.insert(80);

  // arr.delete(1);

  console.log(arr.print());
  // console.log(arr.linearSearch(34));
  console.log(arr.binarySearch(80));

  // arr.traverse((value) => {
  //
  //   if (typeof value === "bigint") {
  //     console.log(value + 1n);
  //   } else {
  //     console.log(value + 1);
  //   }
  // });
}
// arrayBufferSandbox();
// staticArraySandbox();
// unsortedArraySandbox();
sortedArraySandbox();
