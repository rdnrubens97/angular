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
let ligado = false;
let nome = "Rubens";
let idade = 30;
let altura = 1.73;
let nulo = null;
let indefinido = undefined;
let retorno;
let retornoView = 1;
let produto = {
    name: "Rubens",
    cidade: "Araraquara",
    idade: "26"
};
let amortecedor = {
    nome: "Amortecedor",
    preco: 120.99,
    unidades: 5
};
let dados = ["Felipe", "Ana", "Adriana"];
let dados2 = ["Felipe", "Ana", "Adriana"];
let infos = ["Rubens", 28];
let infos2 = ["Rubens", 28];
let boleto = ["Conta de água", 199.90, 345478781];
let aniversario = new Date("2023-12-05 05:00");
console.log(aniversario.toString());
function addNumber(x, y) {
    return x + y;
}
;
let soma = addNumber(4, 7);
console.log(soma);
function addToHello(name) {
    return "Hello, " + name;
}
;
console.log(addToHello("Rubens"));
function CallToPhone(phone) {
    return phone;
}
;
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Rubens";
    });
}
;
;
const bot = {
    id: 1,
    name: "Megaman"
};
class Character {
    constructor(stregth, skill) {
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log("Attack with " + this.stregth + "points");
    }
}
const p1 = new Character(10, 98);
console.log(p1);
