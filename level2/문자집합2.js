let string = 'The phrase "regular expression" is often \n abbreviated as RegEx or regex'

//R or r, E or e 중 하나가 속해있다면 읽어낸다.
let regex = /[Rr]eg[Ee]x/

console.log(regex.exec(string));

