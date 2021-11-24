"use strict";
// new를 통해 오브젝트를 만드는 건 비효율적
// 중간에 매개체 역할을 하는 함수를 만들기
// 단일 객체 패턴 만들기
class ClassName {
    // 위 함수를 매개체로 이용해 객체 꺼내기
    constructor() { }
    // getInstance로만 사용하게 
    static getInstance() {
        // ClassName 으로부터 만든 object가 있으면 return
        // 없으면, ↓ 만들어서 return
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
            // C.N에서 생성된 오브젝트를 C.N.ins~에 넣기
        }
        return ClassName.instance;
    }
}
ClassName.instance = null;
const y = ClassName.getInstance();
// y는 최초로 불리기에 만들어서 리턴
const z = ClassName.getInstance();
// z는 y가 만든 걸 리턴
console.log(y === z);
