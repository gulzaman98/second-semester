// let p = new Promise(function(resolve,reject){
//     let num = 2 + 3

//     if(num == 5){
//         resolve("Success")
//     }
//     else{
//         reject("Failed")
//     }
// })

// p.then((m)=>{
//     document.getElementById("para").innerHTML = m
// })

// p.catch((msg)=>{
//     document.write(msg)
// })



let checkWeather = new Promise(function(resolve , reject){
    let weather = "rainy"

    if(weather == "sunny"){

        resolve("It's sunny day Enjoy !")

    }

    else{
        reject("It's a rainy day")
    }
})

checkWeather.then((w)=>{
    document.getElementById("para").innerHTML = w
})

checkWeather.catch(function(msg){
    document.write(msg)
})
