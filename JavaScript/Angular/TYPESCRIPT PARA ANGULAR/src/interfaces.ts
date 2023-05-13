//interfaces (types x interface)
type robot = {
    readonly id: number;
    name: string;
}

const bot1: robot2 = {
    id: 5,
    name: "megamind",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
}

interface robot2 {
    readonly id: string |number,
    name: string,
    sayHello(): string;
}

const bot2: robot2 = {
    id: 5,
    name: "megamind",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
}
console.log(bot2)
console.log(bot1)

class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: string | number, name: string){
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return `hello i'm ${this.name}`;
    }
}
const p = new Pessoa(1, "gutsman")
console.log(p.sayHello())