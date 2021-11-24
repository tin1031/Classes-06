abstract class AbstarctPerson {
    protected _name : string = 'mm';

    abstract setName(name:string):void;
    // 완전하지 않은 메서드를 만들고 class앞에 Abs 붙이기

}


class APerson extends AbstarctPerson {
    setName(name: string): void {
        this._name = name;
    }

}
// 상속한 다음 Person에 드래그 후 상속된 추가 클래스 구현을 클릭

const ab = new APerson();
ab.setName('dd');