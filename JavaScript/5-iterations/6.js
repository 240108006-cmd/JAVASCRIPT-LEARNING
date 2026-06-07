// foreach 

let arr1=["AKSH","ALOK","HITESH",'VANSH',"ANKIT"]
arr1.forEach((value)=>{
    console.log(value)
})
console.log("")
// can also print specific elemenmts
arr1.forEach((val)=>{
    if(val.length>4)
    {
        console.log(val)
    }
})
console.log("")

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  let variable = books.filter((val)=>(val.genre === 'Non-Fiction'))
  console.log(variable)

  // can also apply multiple conditions 
  let variable2= books.filter(((val)=>((val.genre === 'Fiction')||(val.genre ==='History'))&& (val.publish > 1990)))
  console.log(variable2)