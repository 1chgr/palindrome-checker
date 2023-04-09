
const txtInput=document.querySelector('.inputs input')
const checkBtn=document.querySelector('.inputs button');
const infoTxt=document.querySelector('.info-txt')
let filterInput;



checkBtn.addEventListener('click', ()=>{
    let reverseInput=filterInput.split("").reverse().join("");
    infoTxt.style.display='block';
    if(filterInput!=reverseInput){
    return infoTxt.innerHTML= `No, <span>'${txtInput.value}'</span> isn't a palidrome`    }
    infoTxt.innerHTML= `Yes, <span>'${txtInput.value}'</span> is a palidrome`
})





txtInput.addEventListener('keyup', ()=>{
    // removing spaces & all special characters from entered value
    filterInput=txtInput.value.replace(/[^A-Z0-9]/ig,'');
    if(filterInput){
        return checkBtn.classList.add('active')
    }
    checkBtn.classList.remove('active')
})
