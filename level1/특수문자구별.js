let strings = ['sales1.xls', 'orders3.xls', 'sales2.xls', 'sales3.xls', 'apac1.xls', 'europe2.xls', 'na1.xls', 'na2.xls', 'sa1.xls']
// a.xls로 끝나는 문자열들 .은 특수한 예약어로 \를 이용해서 이스케이프 해줘야한다.
let regex = new RegExp('.a.\.xls')
let filter = strings.filter((element) => {
  return regex.test(element)
})

console.log(filter);
