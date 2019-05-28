let strings = ['sales1.xls', 'orders3.xls', 'sales2.xls', 'sales3.xls', 'apac1.xls', 'europe2.xls', 'na1.xls', 'na2.xls', 'sa1.xls']

// regex1은 regex2처럼 표현할 수 있다.
//대괄호 안에 사용된 -은 특별한 예약어로 범위를 뜻한다. 이는 아스키 문자 상에서 범위를 말한다.

let regex = /[ns]a[0123456789]\.xls/

let filter = strings.filter((element) => {
  return regex.test(element)
})

let regex2 = /[ns]a[0-9]\.xls/
let filter2 = strings.filter((element) => {
  return regex2.test(element)
})

console.log(filter);
console.log(filter2);
