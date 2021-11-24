# Class
    · 하나의 객체로, object를 만드는 청사진이자 설계도
    · 클래스 이전에 object를 만드는 기본적 방법은 function 이었다
    · JavaScript 에도 class는 es6부터 사용 가능하다(대신에 몇가지 기능이 부족하다)
    · TypeScript에서는 class도 사용자가 만드는 타입 중 하나
    · class의 이름은 대문자로 시작

<br/>

## constructor & initialize
```ts
class Person {
    name: string;
    age: number;
}

const p1 = new Person();
```
위처럼 하면 name과 age에 에러와 동시에 초기화된 게 없다는 문구가 뜬다. string라는 타입을 가지고 있어도 실제 값이 할당되는 로직이 class 기준으로 알 수 없다. <br/>
class 내부에서 name, age에 값을 할당해주는 코드가 없기 때문에 코드 기준에서 초기화된 적이 없다고 판단한다.

<br/>

```ts
class Person {
    name: string = "Won";
    age: number;
}

const p1 = new Person();
```
위처럼 하면 `constructor` 가 구현돼 있지 않아도 호출은 가능하다. 단, `new Person()`에 인자를 직접 넣을 수 없다.  <br/>
`class Person` 안에 보이지 않지만 디폴트 생성자라는게 존재한다. (인자가 없어도 실행된다.) <br/>
별도의 생성자를 만들지 않는 이상 디폴트 생성자만 호출된다.

<br/>

```ts
class Person {
    name: string = "Won"; ⓐ
    age: number;

    constructor (age:number) {
        this.age = age;
    } ⓑ
}

const p1 = new Person(33);
```

이런 식으로 프로퍼티를 선언하면서 값을 할당하는 ⓐ방법과 `constructor`안에서 할당하는 ⓑ방법 두 가지가 있다.  <br/>
생성자를 넣으면 디폴트 생성자는 사라진다.

<br/>

만약 `const a1 = new Person()` 의 형식으로 인자를 안 넣은 상태에서 호출하고 싶다면,

```ts
class Person {
    name: string = "Won";
    age: number;

    constructor (age?:number) {
        if(age === undefined) {
            this.age = 20;
        } else {
            this.age = age;
        }
    }
}

const p1 = new Person(33);
const p2 = new Person();
```
`age?` 를 넣는 순간 `number | undefiend` 형태를 갖추기에 if 문으로 `undefiend`의 경우 임의의 숫자를 넣는다.

<br/>


    - 생성자 함수가 없으면 디폴트 생성자가 불린다. / 생성자가 하나라도 있으면 디폴트는 사라진다.
    - strict 모드에서 프로퍼티를 선언하는 곳 또는 생성자에 값을 할당해야 한다.
    - 프로퍼티를 선언하는 곳 또는 생성자에 값을 할당하지 않는 경우에는 !를 붙인다.
    - 클래스의 프로퍼티가 정의 돼 있지만 값을 대입하지 않으면 undefiend다.
    - 생성자에는 async를 설정할 수 없다.

<br/>

## Access Modifiers (접근 제어자)
    클래스 내부에는 생성자, 프로퍼티, 메소드, 접근 제어자를 붙이고, 외내부 혹은 상속하여 접근할 수 있는지 설정할 수 있다.
    example2.ts 참조.

- 외부에서 접근할 수 있는 키워드 : public
- class 내부에서만 접근할 수 있는 키워드: private
- 외부에선 접근 불가능하나 상속 관계일 땐 접근 가능 - protected

<br/>

## initialization in constructor parameters
    생성자의 파라미터를 받아 해당 클레스의 프로퍼티로 초기화하기

```ts
class Person1 {
    public constructor (public name: string, public age:number) {
    }
}

const p1 = new Person1("name", 33);
```
name 앞에 접근 제어자(public)를 붙이면 Person의 this.name, this.age로 할당되므로 코드를 추가하지 않아도 된다.

<br/>

## Getters & Setters
```ts
class Person1 {
    public constructor (public name: string, public age:number) {
    }
}

const p1 = new Person1("name", 33);
console.log(p1.name);
```
위처럼 p1를 받아쓰려면 `console.log(p1.name);` 형식이 된다. p1으로부터 name을 꺼내기에 **get**이라 부르고 `p1.name = "names"; `처럼 다른 값으로 바꾸는 걸 **set**이라 한다.<br>
get을 하는 함수를 Getters로 부르고 set 함수를 Setters로 부른다.
<br>

##### Getters 설정
```ts
class Person1 {
    public constructor (public _name: string, public age:number) {}
    // 프로퍼티
    get name() {
        console.log("get");
        return this._name;
    }
    // get할 거의 이름을 정해준다. (함수라서 같은 이름이 쓰이면 에러가 난다.)
}

const p1 = new Person1("name", 33);
console.log(p1.name);
```
해당 함수를 사용해 `console.log`를 찍으면 `"get"`이 먼저 찍히고 다음에 `"name"`이 찍히는데, 실제 데이터를 get 하기 전에 여러 설정을 해볼 수 있다.

##### Setters 설정
```ts
class Person1 {
    public constructor (public _name: string, public age:number) {}

    get name() {
        console.log("get");
        return this._name;
    }
    set name(n: string) {
        console.log("set");
        this._name = n;
    }
}

const p1 = new Person1("name", 33);
console.log(p1.name);
p1.name = "Hyename";
```
둘의 차이점은 get은 반드시 `return` 이 있어야하나 set은 그럴 필요 없이 임의의 값을 인자로 받아 넣어줘야한다.<br>
위를 콘솔로 찍으면 순서로 `"get"`, `"name"`, `"set"`이 나오며 `Hyename`은 `this._name = n`에 들어가 있다.

<br>

```ts
.
.
.
const p1 = new Person1("name", 33);
console.log(p1.name);
p1.name = "Hyename";
console.log(p1.name);
```
한 번 더 콘솔로그를 찍으면 `"get"`, `"name"`, `"set"`, `"get"`, `"Hyename"` 순으로 찍힌다.

<br>

```ts
class Person1 {
    public constructor (private _name: string, public age:number) {}

    get name() {
        return this._name + " Yee";
    }
}
```
`get`을 위처럼 바꿔주고 접근 제어자를 `private`으로 바꾸면 밖에서 `name`을 수정 못하는 상태로 안에서 데이터 추가가 가능하다.<br>
get을 지우면 undefined가 뜨며 set을 지우면 값을 수정 못하는 읽기 전용 상태가 되므로 주의해서 사용한다.

<br>

## readonly properties
    클래스 프로퍼티에 readonly라는 키워드를 붙여 set은 할 수 없지만 get만 할 수 있는 형태. 프로퍼티를 초기값으로 고정하고 다른 값으로 변경하고 싶지 않을 때 쓰인다.

```ts
class Person1 {
    public constructor (private _name: string, public age:number) {}

    get name() {
        return this._name + " Yee";
    }
}
```
`get name()`은 `_name`으로부터 값을 가져온 후 문자 `"Yee"`를 더한 다음 리턴해주는 것.

<br>

```ts
class Person1 {
    public readonly name: string = 'Name';

    public constructor (private _name: string, public age:number) {}
}
const p1: Person = new Person ("Name", 33);
p1. name = "Hyename";
```
여기서 `name`을 `set`하려고 하면 `readonly` 프로퍼티로 인해 `assign` 할 수 없다는 에러가 뜬다. `name` 값을 바꾸는 게 불가능 해진다.<br>
`readonly` 를 지우면 에러는 사라진다.

<br>

```ts
class Person1 {
    public readonly name: string = 'Name';
    private readonly country: string = "Korea";

    public constructor (private _name: string, public age:number) {}

    hello () {
        this.country = "china";
    }   // XX
}
```
private를 사용할 경우 class 내부에서 불러오는 건 가능하나 값을 바꾸는 건 불가능하다.

<br>

```ts
class Person1 {
    public readonly name: string = 'Name';
    private readonly country: string;

    public constructor (private _name: string, public age:number) {
        this.country = "Korea";
    }

    hello () {
        this.country = "china";
    }   // XX
}
```
프로퍼티를 초기화 하는 건 프로퍼티 안에서 하는 것과 `constructor`에서 하는 게 있다.<br>
프로퍼티와 `constructor` 안에서만 `readonly`가 붙여진 `private country`(프로퍼티)에 값을 지정해줄 수 있다. 다른 메서드 안에서는 값을 바꾸지 못하는 역을 맡는다.

<br>

## Index Signatures in class
    class안에서 Index Signatures(인덱스 시그니쳐)를 선언하고 사용하기
    프로퍼티가 고정된 형태가 아니라 동적으로 바뀔 때 고려할 만한 기능

<br>

`class`는 `object`를 만들어내는 역할

오브젝트가 아래와 같은 모습이면 클래스를 어떻게 정의해야 하는가

    ex. 프로퍼티로 학생 이름을 받고 학생이 남자면 male, 여자는 female 라고 문자 값 지정
    이렇게되면 반마다 다른 오브젝트가 생긴다.
    하지만 프로퍼티에 해당되는 실제 값은 male, female 처럼 문자열만 들어간다는 걸 알 수 있다. 이때 어떻게 class를 만드는가 - example3 참조.

<br>

## Static Properties & Methods
    프로퍼티와 메서드 앞에 Static 키워드를 붙여 쓰는 법 - example4.ts 참조

<br>

## Singletons
    어플이 실행되는 중간에 class로부터 단 하나의 오브젝트만 생성해 사용하는 패턴을 Singletons - example5.ts 참조

<br>

## Inheritance(상속)
    class가 다른 class을 가져다 자신의 기능을 추가해 사용 - example6.ts 참조

<br>

## Abstract Classes
    Abstract를 이용해 완전하지 않은 클래스를 표현할 수 있고 해당 클래스는 new 객체를 만들 수 없다.
    상속과 같은 개념을 사용해 완전한 클래스로 만들기 - example7.ts 참조

    