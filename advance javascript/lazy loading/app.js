let btn = document.getElementById("btn")
btn.addEventListener("click", async() =>{
    let module = await import("./export.js")
    module.myapp()
}) 

