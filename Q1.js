let array=[4,2,6,45,95,86,88,98];
let newArray=['Ali','Sobhan','khan','Toqueer'];


console.log("-------Array Methods-------")
console.log("\nLength : " ,array.length)

console.log("\nConverting array to String : " ,newArray.toString())
console.log("\nGetting value at index (5) : " ,array.at(5))

console.log("\nJoining the array values with  \'-'  : " ,array.join("-"))
console.log("\nRemoving value from array using Pop :  " ,array.pop()+":-  Resulting array is "+array)

console.log("\nAdding value in array using Push ( it return\'s the length of array ) : " ,array.push(76)+":- Resulting array is "+array)

console.log("\nRemoving value from the start of array using Shift :" ,array.shift()+":- Resulting array is "+array)

console.log("\nAdding the value to the start of array using Unshift :" ,array.unshift(56)+" :-Resulting array is "+array)

console.log("\nDeleting value from the specific index of an array ( it return\'s the deleting status ) :  " ,delete array[0]+":- Resulting array is "+array)

console.log("\nConcatination of two arrays : " ,array.concat(newArray))

console.log("\nRemoving values from array at specific index also the number of values and adding more values using Splice :  "+array.splice(4,0,2,2,2,2)+" Resulting array is "+array)
console.log("\nRemoving value from the specific index of array using Splice "+array.splice(4,4))

console.log("\nRemoving value fron array also return the remainig array : "+array.slice(1,5))

console.log("\nGetting the index of specific value : "+array.indexOf(6))
console.log("\nGetting the last index of specific value : "+array.lastIndexOf(2))

console.log("\nChecking weather the value exist in array or not : "+array.includes(6))

console.log("\nFinding value of specific condition using find method : "+array.find((value)=>{
    return value>10
}))


console.log("\nFinding index of any value based on specific condition using findIndex method : "+array.findIndex((value)=>{
    return value>33
}))


console.log("\nFinding last index of any value based on any conditio : "+array.findLast((value)=>{
    return value>786
}))

array.sort()
console.log("\nSorting array using sort() : "+array)


newArray=array.sort((x,y)=>{
    return x-y;
})

console.log("\nSorting array using callBack function in sort() : "+newArray)

 newArray=array.map((value)=>{
    if(value>15){
    return value
    }
})
console.log("\nMap method : "+ newArray)

newArray=array.filter((value)=>{

    return value>=50
})
console.log("\nFilter method : "+newArray)


let value=array.reduce((value1,value2)=>{
    return value1+value2;
})

console.log("\nSum using reduce is : "+value)