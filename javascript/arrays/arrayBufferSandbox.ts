import chalk from "chalk";

function arrayBufferSandbox() {
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

arrayBufferSandbox();
