import StaticArray, { TypedArray, TypedArrayType } from "../StaticArray";

class UnsortedArray {
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
    this.staticArray[this.size] = newEntry;
    this.size += 1;
  }

  delete(index: number): void {
    if (this.size === 0) {
      throw new Error("Delete from an empty array");
    } else if (index < 0 || index >= this.size) {
      throw new Error("Index out of range");
    } else {
      this.staticArray[index] = this.staticArray[this.size - 1];
      this.size -= 1;
    }
    console.log(this.staticArray);
  }

  find(target: number): number {
    for (let i = 0; i < this.size; i++) {
      if (this.staticArray[i] === target) {
        return i;
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

export default UnsortedArray;
