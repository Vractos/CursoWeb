console.log('01)' , '1' == 1) //dois "iguais"("==") comparam o valor de dois elementos
console.log('02)' , '2' === 2) /*tres "iguais" ("===") comparam o tipo de dois
 elementos,no caso um é String e o outro number*/
 console.log('03)' , '3' != 3)//o "!=" indica: diferente (valor)
 console.log('04)' , '3' !== 3)// o "!=="indica:estreitamente diferente
 
 console.log('05)' , 3 < 2)
 console.log('06)' , 3 > 2)
 console.log('07)' , 3 <= 2)
 console.log('08)' , 3 >= 2)

 const d1 = new Date(0)
 const d2 = new Date(0)
 console.log('09' , d1 === d2)
 console.log('10)' , d1 == d2)
 console.log('11)' , d1.getTime() === d2.getTime())
 
 console.log('12' , undefined == null)
 console.log('13)' , undefined === null)