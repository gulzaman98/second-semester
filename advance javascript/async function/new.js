let status = document.getElementById("para")
let result = document.getElementById("para1")

status.innerText = "order is pending"
let orderFood = new Promise(function(resolve , reject){

    let food = true

    setTimeout(function(){
        if(food){
            resolve("your food is ready")
        }else{
            reject("your food is not ready")
        }


    },3000)
})

orderFood.then((msg)=>{
    status.innerText = msg
    result.innerText = "Enjoy your meal"
}).catch((error)=>{
    status.innerText = error
})