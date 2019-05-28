let strings = ['sales1.xls', 'orders3.xls', 'sales2.xls', 'sales3.xls', 'apac1.xls', 'europe2.xls', 'na1.xls', 'na2.xls', 'sa1.xls', 'sam.xls']

//  제외하기는 ^(캐롯)으로 제외시킬 수 있다.

let regex = /[ns]a[^0-9]\.xls/

let filter = strings.filter((element) => {
  return regex.test(element)
})


console.log(filter);

