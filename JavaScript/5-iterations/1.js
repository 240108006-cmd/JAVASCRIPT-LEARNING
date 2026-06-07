for(let x=0;x<=10;x++)
{
    console.log(x)
    if(x==5){
        console.log("ITS TIME TO SIGN OFF!!!!!!")
        break
    }
}

// PRINTING TABLE FROM 2 TO 20
for(let x=2;x<=20;x++){
    console.log("")
    console.log(`THE TABLE OF ${x} IS`)
    for(let y=1;y<=10;y++){
        console.log(`${x} * ${y} is equals `,x*y)
    }
}
console.log("")
//prinitng array elements
let arr=[10,20,30,40,50]
for(let x=0;x<=arr.length-1;x++){
    console.log(arr[x])
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}