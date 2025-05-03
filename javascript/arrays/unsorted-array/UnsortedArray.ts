import StaticArray, { TypedArray, TypedArrayType } from "../StaticArray";

class UnsortedArray {
  private size: number;
  private array: TypedArray;

  constructor(maxSize: number, type: TypedArrayType) {
    const arr = new StaticArray(maxSize, type);
    this.array = arr.arr;
    this.size = 0;
  }

  get length(): number {
    return this.size;
  }

  print() {
    return this.array.slice(0, this.size);
  }

  // TODO: newEntry should by constrained by the array type
  insert(newEntry: number): void {
    if (this.size >= this.array.length) {
      throw new Error("The array is already full");
    }
    this.array[this.size] = newEntry;
    this.size += 1;
  }

  delete(index: number): void {
    if (this.size === 0) {
      throw new Error("Delete from an empty array");
    } else if (index < 0 || index >= this.size) {
      throw new Error("Index out of range");
    } else {
      this.array[index] = this.array[this.size - 1];
      this.size -= 1;
    }
  }

  find(target: number): number {
    for (let i = 0; i < this.size; i++) {
      if (this.array[i] === target) {
        return i;
      }
    }
    return -1;
  }

  traverse(cb: (element: number | bigint) => void): void {
    for (let i = 0; i < this.size; i++) {
      cb(this.array[i]);
    }
  }
}

export default UnsortedArray;
