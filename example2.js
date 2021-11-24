"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Person1 {
    constructor(age) {
        this.name = "Won";
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
// 현재 아무 설정이 안 돼 있어서 외부에서도 쉽게 접근 가능
// public이 외부에서 접근가능하나
// 직접 사용해도, 사용하지 않아도 public 상태다
const p1 = new Person1(33);
// 생성자의 public 덕분에 new Person1를 호출할 수 있는 것
console.log(p1);
// public 상태라면 p1. 했을 때 class 내부의
// 메소드 등에 접근 가능하다
