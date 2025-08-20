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
    log(chalk.bgGreen(`Adding ${newEntry} to array`));

    this.staticArray[this.size] = newEntry;
    this.size += 1;
    log(
      this.size > 1 ? "static array before sort: " : "static array: ",
      this.staticArray,
    );

    for (let i = this.size - 1; i > 0; i--) {
      log(chalk.italic(`<------- Loop Iteration Start (i = ${i}) -------`));

      if (this.staticArray[i] < this.staticArray[i - 1]) {
        log(
          this.staticArray[i] + " is smaller than " + this.staticArray[i - 1],
        );
        const temp = this.staticArray[i - 1];

        this.staticArray[i - 1] = this.staticArray[i];
        this.staticArray[i] = temp;
        log("static array after sort: ", this.staticArray);
      } else {
        log(this.staticArray[i] + " is larger than " + this.staticArray[i - 1]);
        log(chalk.italic(" ---------- Loop Iteration Break ------------>"));
        break;
      }
      log(chalk.italic(" ------- Loop Iteration End ----------------->"));
    }
  }

  delete(index: number): void {
    log(chalk.bgRed(`Deleting index ${index} from array`));
    if (this.size === 0) {
      throw new Error("Delete from an empty array");
    } else if (index < 0 || index >= this.size) {
      throw new Error("Index out of range");
    } else {
      for (let i = index; i < this.size - 1; i++) {
        this.staticArray[i] = this.staticArray[i + 1];
      }
      this.size -= 1;
    }
  }

  linearSearch(target: number): number {
    for (let i = 0; i < this.size; i++) {
      if (this.staticArray[i] === target) {
        return i;
      } else if (this.staticArray[i] > target) {
        return -1;
      }
    }
    return -1;
  }

  binarySearch(target: number): number {
    let right = this.size - 1;
    let left = 0;
    log({ right, left });

    while (left <= right) {
      const midIndex = (right - left) / 2;
      const midValue = this.staticArray[midIndex];
      log({ midIndex, midValue });

      if (target === midValue) {
        return midIndex;
      } else if (target > midValue) {
        left = midIndex;
      } else {
        right = midIndex;
      }
    }

    return -1;
  }

  traverse(cb: (element: number | bigint) => void): void {
    for (let i = 0; i < this.size; i++) {
      cb(this.staticArray[i]);
    }
  }
}

export default SortedArray;
