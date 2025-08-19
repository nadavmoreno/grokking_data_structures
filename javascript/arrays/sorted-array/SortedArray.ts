import StaticArray, { TypedArray, TypedArrayType } from "../StaticArray";
import chalk from "chalk";

const log = console.log;

class SortedArray {
  private size: number;
  private staticArray: TypedArray;

  constructor(maxSize: number, type: TypedArrayType) {
    this.staticArray = new StaticArray(maxSize, type).arr;
    this.size = 0;
  }

  get length(): number {
    return this.size;
  }

  print() {
    return this.staticArray.slice(0, this.size);
  }

  // TODO: newEntry should by constrained by the array type
  insert(newEntry: number): void {
    if (this.size >= this.staticArray.length) {
      throw new Error("The array is already full");
    }
    log(chalk.bgYellow(`Adding ${newEntry} to array`));

    this.staticArray[this.size] = newEntry;
    this.size += 1;
    log("static array before sort: ", this.staticArray);

    for (let i = this.size - 1; this.size > 1 && i > 0; i--) {
      log(chalk.italic(`<------- Loop Iteration Start (i = ${i}) -------`));

      if (this.staticArray[i] < this.staticArray[i - 1]) {
        log(
          this.staticArray[i] + " is smaller than " + this.staticArray[i - 1],
        );
        const temp = this.staticArray[i - 1];

        this.staticArray[i - 1] = this.staticArray[i];
        this.staticArray[i] = temp;
        log("static arry after sort: ", this.staticArray);
      } else {
        log(this.staticArray[i] + " is larger than " + this.staticArray[i - 1]);
        log(chalk.italic(" ---------- Loop Iteration Break ------------>"));
        break;
      }
      log(chalk.italic(" ------- Loop Iteration End ----------------->"));
    }
  }

  // delete(index: number): void {
  //   if (this.size === 0) {
  //     throw new Error("Delete from an empty array");
  //   } else if (index < 0 || index >= this.size) {
  //     throw new Error("Index out of range");
  //   } else {
  //     this.staticArray[index] = this.staticArray[this.size - 1];
  //     this.size -= 1;
  //   }
  // }

  // find(target: number): number {
  //   for (let i = 0; i < this.size; i++) {
  //     if (this.staticArray[i] === target) {
  //       return i;
  //     }
  //   }
  //   return -1;
  // }

  // traverse(cb: (element: number | bigint) => void): void {
  //   for (let i = 0; i < this.size; i++) {
  //     cb(this.staticArray[i]);
  //   }
  // }
}

export default SortedArray;
