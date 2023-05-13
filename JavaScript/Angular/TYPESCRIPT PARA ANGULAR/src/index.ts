//decorators
function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version })
    }
}
//attribute decorator
function minLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => "[play]"+ _value;
        const setter = (value: string) => {
            if(value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`)
            } else {
                _value = value;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter, 
        })
    };
}
class Api {
    @minLength(10)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
const api = new Api("usagcgcggp");
console.log(api.name)

/* function ExibirNome(target: any){
    console.log(target);
}

@ExibirNome
class Funcionario {}

@ExibirNome
class Quincas {}
 */
type Hero = {
    name: string;
    vulgo: string;
};
function printaObjeto(pessoa: Hero) {
    console.log(pessoa)
}
//isso printa um objeto
printaObjeto({
    name: "bruce wayne",
    vulgo: 'batman',
})
