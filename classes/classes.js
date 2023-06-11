// inspired by https://heintz-s.github.io/GIS/lecture/json-localStorage/5
class TestClassA {
  constructor() {
    this.a = 1;
  }
  func_a() {
    console.log("func_a");
    this.a++;
  }
}

class TestClassB extends TestClassA {
  constructor() {
    super();
    this.b = 2;
  }
  func_b() {
    console.log("func_b");
    // this.a++;
    this.b--;
  }
}

let t = new TestClassA();
console.log(t); // check your console output

t.func_a();
console.log(t);

//t.func_b();
//console.log(t);

// let t2 = new Test2();
// // t2.c = 3;
// console.log(t2);

// console.log(`${t instanceof Test2}, ${t2 instanceof Test2}`);
