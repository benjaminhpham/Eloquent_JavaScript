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

//6.2 Groups
class Group {
  constructor() {
    this.group = [];
  }
  add(value) {
    if (!this.group.includes(value)) {
      this.group.push(value);
    }
  }
  delete(value) {
    if (this.group.includes(value)) {
      this.group.splice(this.group.indexOf(value), 1);
    }
  }
  has(value) {
    if (this.group.indexOf(value) === -1) {
      return false;
    }
    return true;
  }
}

const group = new Group();
group.add(1);
group.add(2);
group.add(3);
group.delete(2);
console.log(group.has(2));
console.log(group.has(3));
console.log(group);

// 6.2 Browing a Method
let map = { one: 1, two: 2, three: 3, hasOwnProperty: true };
console.log(Object.hasOwnProperty.call(map, "one"));
console.log(Object.hasOwnProperty.call(map, "hasOwnProperty"));
console.log(Object.hasOwnProperty.call(map, "abcdefg"));
