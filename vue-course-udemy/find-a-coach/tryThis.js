var aShot = {
  a: {
    hereWeComeDeeper: 'woof',
  }
}

var vazGen = {
  ...aShot
}

vazGen.a.hereWeComeDeeper = 'myak';

console.log(aShot);
console.log(vazGen);