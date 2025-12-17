let chatbotData = []

fetch("data.json")
.then(response => response.json())
.then(data => {
    chatbotData = data;
})

function send(){
    let user = document.getElementById("userMsg").value.toLowerCase();
    let answer = "I can't understand.";

     for (let i = 0 ; i < chatbotData.length; i++){
    if(chatbotData[i].question === user){
        answer = chatbotData[i].answer
        break;
    }
}
    document.getElementById("reply").innerHTML = answer
}
   



