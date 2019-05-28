let path = 'home\bin\sales'

//특수기호인 \를 체크하기위해서는 이스케이프인 \를 써서 \\를 써야 \를 찾을수 있게된다.
regex = /\\/

console.log(path.match(regex));
