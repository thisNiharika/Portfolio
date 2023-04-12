const textareaE1 =document.getElementById("textarea")
const totalCounterE1 = document.getElementById("total-counter")
const remainingCounterE1 = document.getElementById("remaining-counter")
textareaE1.addEventListener("keyup", ()=>{
// console.log("key is pressed")
updateCounter()
});
updateCounter()


function updateCounter(){
    var maxlength = document.getElementById("input").value;
    textareaE1.maxlength = "" + maxlength;
     totalCounterE1.innerText = textareaE1.value.length;
     console.log(maxlength);
     var maxlength = document.getElementById("input").value;
     remainingCounterE1.innerText = maxlength - textareaE1.value.length;
     
}




