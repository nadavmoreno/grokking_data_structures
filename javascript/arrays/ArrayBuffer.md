# ArrayBuffer

Empirically, this is not an array! - `const a = []`

## What?
- The most fundamental idea of an array, it is a contiguous memory space, that contains a certain amount of bytes.
- Array is a fixed size, contiguous memory chunk
  - That means you can’t grow it
  - There is no "insertAt" or push or pop. Doesn't mean you can't write those (other data structures implement those, while using array underneath the hood)

## Under the hood

### Step 1: Create a new ArrayBuffer with a size of 6 bytes
When you create one with `new ArrayBuffer(6)`, you're allocating 6 bytes (1 byte = 8 bits) of memory:

```ts
const buffer = new ArrayBuffer(6);

console.log(buffer);
// output:
// ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6 }
```

1. `[Uint8Contents]: <00 00 00 00 00 00>`: This shows the actual contents of the buffer
   - Each `00` represents one byte initialized to zero
   - You see six `00`s because you created a 6-byte buffer
   - ArrayBuffers are always initialized with zeros

2. `byteLength: 6`: This confirms the size of your buffer is 6 bytes
3. "UInt8" means "unsigned 8-bit integer"
   - This is a type of data that can be stored in the buffer
   - It can hold values from 0 to 255 (16²)
4. Each byte is reprented by 2 hexadecimal digits (base-16) notation, which is the standard way to represent binary data in a more human-readable form
   - `00` (or `0x00` when written in source code) is 0 in decimal
   - `01` (or `0x01`) is 1 in decimal
   - `FF` (or `0xFF`) is 255 in decimal

Note that ArrayBuffer by itself is just raw memory - you can't directly manipulate its contents. To work with the data, you need to use a TypedArray or DataView

### Step 2: Create a TypedArray view of the ArrayBuffer

```ts
const a8View = new Uint8Array(buffer);

console.log(a8View);
// output:
// Uint8Array(6) [ 0, 0, 0, 0, 0, 0 ]
```

1.  `Uint8Array` is a typed array that provides a view for 8-bit unsigned integers on the ArrayBuffer
2.  This view allows you to manipulate the buffer as an array of 8-bit unsigned integers (0-255)
3.  Changes to the Uint8Array will directly affect the underlying ArrayBuffer


### Step 3: Fill the TypedArray with values

```ts
a8View[0] = 45;
a8View[2] = 45;

console.log(a8View);
// output:
// Uint8Array(6) [ 45, 0, 45, 0, 0, 0 ]
```

### Step 4:  Create a Uint16Array view on the same ArrayBuffer

```ts
const a16View = new Uint16Array(buffer);

console.log(a16View);
// output:
// Uint16Array(3) [45, 45, 0]

console.log(buffer);
// output:
// ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 00 00>, byteLength: 6 }
```

1. `Uint16Array` is a typed array that provides a view for 16-bit unsigned integers on the ArrayBuffer
2. It is grouping the bytes in pairs
3. 2d is hexadecimal for 45

An interesting thing to note is that if you change `a8View[3] = 45` instead of `a8View[2] = 45` in the last step, the output of a16View will be `[45, 11520, 0]` instead of `[45, 45, 0]`,
because when you set `a8View[3] = 45`, that byte becomes the "high" byte of the second 16-bit number in little-endian ordering. Since it's the high byte, its value gets multiplied by 256


### Step 5:  Set the third 16-bit integer in the Uint16Array to 0x4545

```ts
a16View[2] = 0x4545;

console.log(a16View);
// output:
// Uint16Array(3) [ 45, 45, 17733 ]

console.log(buffer);
// output:
// ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 45 45>, byteLength: 6 }

console.log(a8View);
// output:
// Uint8Array(6) [ 45, 0, 45, 0, 69, 69 ]
```

1. The value 0x4545 is a hexadecimal representation of the number 17733
2. This sets the third 16-bit integer in the Uint16Array to 17733
3. The ArrayBuffer now contains the updated bytes, represented in hexadecimal: (0x2D), (0x00), (0x2D), (0x00), (0x45), (0x45)
4. The last two bytes of the Uint8Array are now 69 (0x45 in hexadecimal)

## Operations
- **Insert** - arrays cannot grow, when you insert something, it’s overwriting
- **Delete** - you can’t delete something out off contiguous  memory. You set it to `null` so you will know it is not anything anymore (There is not something in this very something spot)

## Time Complexity
At a specific index, getting, inserting  and deleting is O(1) constant time complexity (we do a constant amount of things, no matter what the input is)
