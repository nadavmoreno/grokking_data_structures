export type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint16Array
  | Int16Array
  | Int32Array
  | Uint32Array
  | BigInt64Array
  | BigUint64Array
  | Float32Array
  | Float64Array;

export type TypedArrayType =
  | "b" // signed integer, 1 byte
  | "B" // unsigned integer, 1 byte
  | "i" // signed integer, 2 bytes
  | "I" // unsigned integer, 2 bytes
  | "l" // signed integer, 4 bytes
  | "L" // unsigned integer, 4 bytes
  | "q" // signed integer, 8 bytes
  | "Q" // unsigned integer, 8 bytes
  | "f" // floating point, 4 bytes
  | "d"; // floating point, 8 bytes

const TypedArrayMap = {
  b: Int8Array,
  B: Uint8Array,
  i: Int16Array,
  I: Uint16Array,
  l: Int32Array,
  L: Uint32Array,
  q: BigInt64Array,
  Q: BigUint64Array,
  f: Float32Array,
  d: Float64Array,
} as const;

class StaticArray {
  private size: number;
  private array: TypedArray;
  private type: TypedArrayType;
  private buffer: ArrayBuffer;

  constructor(size: number, type: TypedArrayType = "l") {
    if (size <= 0) {
      throw new Error("Size must be a positive integer");
    }
    this.size = size;
    this.type = type;

    this.buffer = new ArrayBuffer(size);
    const ArrayConstructor = TypedArrayMap[type];
    this.array = new ArrayConstructor(this.buffer);
  }

  // TODO: value should by constrained by the array type
  set(index: number, value: number): void {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }

    this.array[index] = value;
  }

  get length(): number {
    return this.size;
  }

  get(index: number): number | bigint {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }

    return this.array[index];
  }

  get arr(): TypedArray {
    return this.array;
  }
}

export default StaticArray;
