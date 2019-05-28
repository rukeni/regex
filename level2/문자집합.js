let strings = ['sales1.xls', 'orders3.xls', 'sales2.xls', 'sales3.xls', 'apac1.xls', 'europe2.xls', 'na1.xls', 'na2.xls', 'sa1.xls']

// 문자들 중 하나에 속하는 경우에는 대괄호를 사용하여 대괄호 내부집합에 해당하는 문자열을 찾는다.
// 이 경우 n과 s중에 해당하는것이 있는 문자열이 찾아진다.

let regex = /[ns]a.\.xls/

let filter = strings.filter((element) => {
  return regex.test(element)
})

console.log(filter);