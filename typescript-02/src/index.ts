// tipos primitivos
let ligado:boolean = false;
let nome:string = "Rubens";
let idade:number = 30;
let altura:number = 1.73;

// tipos especiais
let nulo:null = null;
let indefinido:undefined = undefined;

// tipos abrangentes
let retorno:void;
let retornoView:any = 1;

// objeto sem previsibilidade
let produto:object = {
    name: "Rubens",
    cidade: "Araraquara",
    idade: "26"
};

// objeto com previsibilidade 
type ProdutoLoja = {
    nome: string;
    preco: Number;
    unidades: number;
};

let amortecedor: ProdutoLoja = {
    nome: "Amortecedor",
    preco: 120.99,
    unidades: 5
};

// arrays
let dados: string[] = ["Felipe", "Ana", "Adriana"];
let dados2: Array<string> = ["Felipe", "Ana", "Adriana"];

// array multitypes
let infos: (string | number)[] = ["Rubens", 28];
let infos2: Array<string | number> = ["Rubens", 28];

// tuplas (vetor multityples com sequencia definida)
let boleto: [string, number, number] = ["Conta de água", 199.90, 345478781];

// arrays - métodos

// datas
let aniversario:Date = new Date("2023-12-05 05:00");
console.log(aniversario.toString());

// funções
function addNumber(x: number, y: number): number {
    return x + y;
};
let soma: number = addNumber(4, 7);
console.log(soma);

function addToHello(name: string): string {
    return "Hello, " + name;
};
console.log(addToHello("Rubens"));

// funções multitypes
function CallToPhone(phone: number | string): number | string {
    return phone;
};

// funções assync
async function getDatabase(id:number): Promise<string> {
    return "Rubens";
};

// interfaces (type x interface) 
type robot = {
    readonly id: number;
    name: string;
};

interface robot2 {
    readonly id: number | string;
    name: string;
};

const bot: robot2 = {
    id: 1,
    name: "Megaman"
};

// classes
class Character {
    name?: string;
    stregth: number;
    skill: number;

    constructor(stregth: number, skill: number) {
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void {
        console.log("Attack with " + this.stregth + "points");
    }
}
const p1 = new Character(10, 98);
console.log(p1);