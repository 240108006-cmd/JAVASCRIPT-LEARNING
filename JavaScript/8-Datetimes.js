// 5 metbods to initialze dates
let mydate1= new Date()
console.log(mydate1.toString())
console.log(mydate1.toDateString())
console.log(mydate1.toLocaleString())
console.log(mydate1.getDate())
console.log(mydate1.getDay())
console.log(mydate1.getMonth()+1)// have to plus 1 as it worlks on index
console.log(mydate1.getFullYear())
console.log(mydate1.getTime()) // it returns total milliseconds
console.log(mydate1.getHours())
console.log(mydate1.getMinutes())
console.log(mydate1.getSeconds())
console.log("")


let mydate2= new Date(2026,5,4)
console.log(mydate2.toString())
console.log(mydate2.toDateString())
console.log(mydate2.toLocaleString())
console.log(mydate2.getDate())
console.log(mydate2.getDay())
console.log(mydate2.getMonth()+1)// have to plus 1 as it worlks on index
console.log(mydate2.getFullYear())
console.log(mydate2.getTime())// it returns total milliseconds
console.log(mydate2.getHours())
console.log(mydate2.getMinutes())
console.log(mydate2.getSeconds())
console.log("")



let mydate3= new Date(2026,5,4,13,45,50)
console.log(mydate3.toString())
console.log(mydate3.toDateString())
console.log(mydate3.toLocaleString())
console.log(mydate3.getDate())
console.log(mydate3.getDay())
console.log(mydate3.getMonth()+1)// have to plus 1 as it worlks on index
console.log(mydate3.getFullYear())
console.log(mydate3.getTime())// it returns total milliseconds
console.log(mydate3.getHours())
console.log(mydate3.getMinutes())
console.log(mydate3.getSeconds())
console.log("")



let mydate4= new Date("2026-06-04")
console.log(mydate4.toString())
console.log(mydate4.toDateString())
console.log(mydate4.toLocaleString())
console.log(mydate4.getDate())
console.log(mydate4.getDay())
console.log(mydate4.getMonth()+1)// have to plus 1 as it worlks on index
console.log(mydate4.getFullYear())
console.log(mydate4.getTime())// it returns total milliseconds
console.log(mydate4.getHours())
console.log(mydate4.getMinutes())
console.log(mydate4.getSeconds())

console.log("")



let mydate5= new Date("06-04-2026")
console.log(mydate5.toString())
console.log(mydate5.toDateString())
console.log(mydate5.toLocaleString())
console.log(mydate5.getDate())
console.log(mydate5.getDay())
console.log(mydate5.getMonth()+1)// have to plus 1 as it worlks on index
console.log(mydate5.getFullYear())
console.log(mydate5.getTime())// it returns total milliseconds
console.log(mydate5.getHours())
console.log(mydate5.getMinutes())
console.log(mydate5.getSeconds())
console.log("")

console.log(mydate5.toLocaleString(`default`,{day:"numeric",hour:"numeric",weekday:"long"}))
