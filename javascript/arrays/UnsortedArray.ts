import StaticArray from "./StaticArray";
import { TypedArrayType, TypedArray } from "./StaticArray";

class UnsortedArray {
  private index: number;
  private array: TypedArray;

  constructor(size: number, type: TypedArrayType) {
    const arr = new StaticArray(size, type);
    this.array = arr.arr;
    this.index = 0;
  }

  // TODO: newEntry should by constrained by the array type
  insert(newEntry: number): void {
    if (this.index > this.array.length - 1) {
      throw new Error("The array is already full");
    }
    this.array[this.index] = newEntry;
    this.index += 1;
  }
}

export default UnsortedArray;
