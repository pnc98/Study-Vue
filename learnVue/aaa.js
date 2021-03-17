export var a = 1
export var b = 2
export function sum(first, second) {
    return first + second
}
console.log(sum(2, 3))

//export default 默认导出，只能存在一个，并且在impor时可随意命名（导出的是一个函数）