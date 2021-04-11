const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliaca1 = 9.071
const avaliacao2 = 6.071

const total = avaliaca1 * peso1 + avaliacao2 * peso2
const media = total 

console.log(media.toFixe(2))
console.log(media.toString(2)) // em binário
console.log(typeof media)
console.log(typeof Number)