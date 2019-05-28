//구별

let string1 = 'Hello hworld'
let regex1 = new RegExp('h')

console.log(string1.match(regex1));

//구별 x
let regex2 = /h/i
console.log(string1.match(regex2));
