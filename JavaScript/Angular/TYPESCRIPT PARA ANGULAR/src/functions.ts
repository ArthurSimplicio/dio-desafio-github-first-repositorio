//funções
function addNUmber(x: number , y: number): number
{
    return x + y;
}
function addHello(name: string): string {
    return `Hello ${name}`;
}
function CallToPhone(phone: number | string) {
    return phone;
}
async function getDataBase(id: number): Promise<string | number> {
    return "Arthur";
}

let soma: number = addNUmber(4, 7);
console.log(soma)
console.log(addHello("Arthur"))
console.log(CallToPhone(87564646377))