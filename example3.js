"use strict";
// A반 {mark: 'male', jade: 'male'}
// B반 {chloe: 'female', alex: 'male', anna : 'female'}
// 위의 A반과 B반 오브젝트를 만들 수 있는 클래스 만들기
class Students {
    constructor() {
        // 프로퍼티 값이 무엇이든 male 혹은 female이 붙어야한다
        // ex. 모든 반에 항상 mark 가 존재할 시
        this.mark = 'male';
        // mark = male로 하면 에러가 뜨는데 male로 지정한다 해도 mark가 male이라는 타입이 아니기 때문
        // 위처럼 정하면 Students 라는 class는
        // 항상 mark 프로퍼티가 male 값을 가지고 있는 오브젝트이며 나머지는 옵셔널하게 등록 가능
    }
}
// 프로퍼티 이름이 동적이라면 mark:string = 'male' 같은 처리를 하면 안된다
const a = new Students();
a.mark = 'male';
a.jade = 'male';
console.log(a);
// 콘솔을 보면 Students { mark: 'male', jade: 'male' } 으로 뜬다
const b = new Students();
b.chloe = 'female';
b.alex = 'male';
b.anna = 'female';
console.log(b);
// b.[] 가 index.
// index는 있을 수도, 없을 수도 있는 프로퍼티(옵셔널에 가까움)라
// 초기값이 무엇이다는 확정을 내릴 수 없는 형태다.
