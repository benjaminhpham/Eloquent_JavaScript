// 6.1 A Vector Type
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(vec) {
    return new Vec(this.x + vec.x, this.y + vec.y);
  }
  minus(vec) {
    return new Vec(this.x - vec.x, this.y - vec.y);
  }
  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

const vec1 = new Vec(3, 4);
console.log(vec1.plus(new Vec(6, 7)));
console.log(vec1.minus(new Vec(6, 7)));
console.log(vec1.length);
