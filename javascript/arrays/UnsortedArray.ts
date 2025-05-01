import StaticArray from "./StaticArray";
import { TypedArrayType, TypedArray } from "./StaticArray";

class UnsortedArray {
  private size: number;
  private array: TypedArray;
  // private type: TypedArrayType;
  // private buffer: ArrayBuffer;

  constructor(size: number, type: TypedArrayType) {
    this.size = size;
    const { arr } = new StaticArray(size, type);
    this.array = arr;
  }
}

export default UnsortedArray;
