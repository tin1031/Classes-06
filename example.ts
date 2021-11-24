class Person {
    name;
    // 객체로 만들어졌을 때 name이라는 프로퍼티를 가짐
    constructor(name: string) {
        this.name = name;
        // 생성된 오브젝트 자신을 가리키는 this
    }
    // 밖에서 들어오는 name값은 string으로 지정
    // name의 실제 값은 생성자 constructor 함수가 생성되면서
    // 프로퍼티 name을 받아서 넣어주는 형식
}

const a1 = new Person("Won");
// new를 이용하고 class를 통해 object를 만들 수 있다

console.log(a1);
// node example.js 찍어내면 Person{}로 나온다
// es6에만 지원되는 class를 es5에도 사용할 수 있게 하려면
// function으로 된 코드로 변환된다