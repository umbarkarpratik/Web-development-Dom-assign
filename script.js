const btn1=document.getElementById("button1")
const btn2=document.getElementById("button2")
const resetbtn=document.getElementById("reset")
const dsp=document.getElementById("displayvalue")



  

function incrementNo (){
    
   
        const value=Number(dsp.innerText)
        dsp.innerText=value +1;
    
   

    
}
function decrementNo(){

    const value=Number(dsp.innerText)
    if(value>0){
        dsp.innerText=value-1
    }
    else{
        alert("Negative vaule not Allowed");
    }
   
}
function ResetNo(){
    const value=Number(0)
   dsp.innerText=value
   
}


btn1.addEventListener("click",incrementNo)
btn2.addEventListener("click",decrementNo)
resetbtn.addEventListener("click",ResetNo)

