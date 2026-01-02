// SPREAD OPERATOR

let arr1 = ["ALi" , "Hamza" , "Gulzaman" , "Imran"]
let arr2 = ["Mustafa" , "Saad" , "Hasnain" , "Naveed"]

let arr3 = [...arr1 , ...arr2]
// document.write(arr3 , )

for(let names of arr3){
    // document.write(names , "<br>")
}

let obj1 = {
    id: 1,
    name: "Gulzaman",
    age: 27
}

let obj2 = {
    id : 2,
    name : "Ali",
    age : 28
}

let mainobj = {obj1,obj2}
for(let value in mainobj){
    let obj = mainobj[value]

    for(let key in obj){
        document.write(obj[key] , "<br>")
    }
}