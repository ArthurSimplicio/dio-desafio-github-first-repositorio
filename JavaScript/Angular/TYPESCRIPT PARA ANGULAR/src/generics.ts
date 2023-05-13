//generics
function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens)
}
const numArray = concatArray<number[]>([1, 5], [2])
const stgArray =concatArray<string[]>(["Arthur"], ["Vegeta", "Batman"])
numArray.push([45])
console.log(numArray)
console.log(stgArray)