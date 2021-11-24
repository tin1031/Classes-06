class Person1 {
    public name: string = "Won";
    public age!: number;

    public constructor (age?:number) {
        if(age === undefined) {
            this.age = 20;
        } else {
            this.age = age;
        }
    }

    public async init() {}
}
// 현재 아무 설정이 안 돼 있어서 외부에서도 쉽게 접근 가능

// public이 외부에서 접근가능하나
// 직접 사용해도, 사용하지 않아도 public 상태다


const p1 = new Person1(33);
// 생성자의 public 덕분에 new Person1를 호출할 수 있는 것

console.log(p1)
// public 상태라면 p1. 했을 때 class 내부의
// 메소드 등에 접근 가능하다