"use strict";
class Person {
    // 객체로 만들어졌을 때 name이라는 프로퍼티를 가짐
    constructor(name) {
        this.name = name;
        // 생성된 오브젝트 자신을 가리키는 this
    }
}
const a1 = new Person("Won");
// new를 이용하고 class를 통해 object를 만들 수 있다
console.log(a1);
// node example.js 찍어내면 Person{}로 나온다
// es6에만 지원되는 class를 es5에도 사용할 수 있게 하려면
// function으로 된 코드로 변환된다
