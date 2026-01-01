let status = document.getElementById("para")
let result = document.getElementById("para1")

status.innerText = "Order is Pending"

let orderFood = new Promise((resolve , reject)=>{
    let food = true

    setTimeout(function(){

         if(food){
        resolve("Food is ready")
    }else{
        reject("Food is not ready")
    }


    },3000)
   
})

orderFood.then((msg)=>{
    status.innerText = msg
    result.innerText = "Enjoy your meal"
})

orderFood.catch((error)=>{
    status.innerText = error
})

