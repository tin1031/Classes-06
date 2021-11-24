"use strict";
class Person4 {
    // private로 바꿔도 되며, console에 'hello', Person4.City 형식으로 사용가능
    static hello() {
        console.log('hello');
    }
}
Person4.City = 'seoul';
const b1 = new Person4();
// ⓑ b1.hello();
// ⓒ 여태 위의 형식이였다면 Static은 아래형식
//    class에 바로 함수를 사용하는 방식
Person4.hello();
Person4.City;
// ⓓ 위처럼 하면 새로 오브젝트를 만들지 않아도 Person4 데이터 공유 가능
// ⓔ class로 만들어진 오브젝트에서 공통으로 사용하고 싶은 데이터가 있다면 static을 넣어 사용가능
