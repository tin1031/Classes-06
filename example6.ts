// 부모 역 class
class Parent {
    constructor(protected _name:string, private _age: number) {

    }

    public print() :void {
        console.log(`이름 ${this._name}, 나이는 ${this._age}`);
    }

    protected printName() : void{
        console.log(this._name, this._age);
    }
}

// const p = new Parent("won", 33);
// // _age는 private라 사용불가, _name도 private과 비슷한 역이라 불가
// p.print();

// 상속은 위의 Parent class 기능을 그대로 물려 받고
// 새로운걸 추가 및 덮어씌워 class를 만들어내는 작업


// Child에 만들어둔 생성자가 없다면 Parent를 따른다
class Child extends Parent {
    // public _name = 'mark jr.';
    // name 뿐 아니라 접근 제어자도 Override 가능(상위 클래스 메서드 재정의)

    public gender = 'male';

    constructor(age: number) {
        super('mark jr.', age)  //먼저 호출
        this.printName()
    }
    // 오버라이드하려면 부모 생성자(super())를 호출해야한다
    // 부모 생성자와 같은 형식을 갖춰야한다
}

const c = new Child(5);
// Child()를 그냥 쓰면 에러가 뜨지만 부모와 똑같이 값을 넣으면 에러는 사라진다

c.print()