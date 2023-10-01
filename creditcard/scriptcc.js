const btn = document.querySelector(".conf")
const nameIp = document.querySelector(".nameInput")
const numIp = document.querySelector(".num")
const numOnCard = document.querySelectorAll(".cardNum")
const nameOnCard = document.querySelector(".nameOnCard")
const monthOnCard = document.querySelector(".monthOnCard")
const yearOnCard = document.querySelector(".yearOnCard")
const monthIp = document.querySelector(".month")
const yearIp = document.querySelector(".year")
const cvvOnCard = document.querySelector(".cvvOnCard")
const cvvIp = document.querySelector(".cvvIp")
const confirmBtn = document.querySelector(".btn")
const error = document.querySelectorAll(".error")
const cont = document.querySelector(".conti")
const thankYou = document.querySelector(".thankYouContainer")
const cardContainer = document.querySelector(".cardContainer")




let span=3
let prevL=0
let errText=""
let flag=1
const d = new Date();
let year = d.getFullYear();

let arr=[1,2,3,4,5,6,7,8,9,0]
let arr2 = ["!","#","$","%","^","&","*","(",")","/","[","]","{","}","|",",",".","@","-","1","2","3","4","5","6","7","8","9","0"]


function resetAll(){
    numIp.value=""
    nameIp.value=""
    monthIp.value=""
    yearIp.value=""
    cvvIp.value=""
    numOnCard.forEach(element =>{
        element.innerHTML="0"
    })
    nameOnCard.innerHTML="Name"
    monthOnCard.innerHTML="00"
    yearOnCard.innerHTML="00"
    cvvOnCard.innerHTML="000"
}

function setNum(element){
    element.target.style.cssText = "border : 1px solid gray"
    error[1].classList.remove("active")
    if(prevL<element.target.value.length){
        numOnCard[prevL].innerHTML = element.target.value.split('')[prevL]
        prevL=element.target.value.length
    }
    else{
        numOnCard[prevL-1].innerHTML=0
        prevL=element.target.value.length
    }

}


function setName(element){
    element.target.style.cssText = "border : 1px solid gray"
    error[0].classList.remove("active")
    nameOnCard.innerText=element.target.value
}

function setMonth(element){
    element.target.style.cssText = "border : 1px solid gray"
    error[2].classList.remove("active")
    monthOnCard.innerText = element.target.value
}
function setYear(element){
    element.target.style.cssText = "border : 1px solid gray"
    error[2].classList.remove("active")
    yearOnCard.innerText = element.target.value
}
function setCvv(element){
    element.target.style.cssText = "border : 1px solid gray"
    error[3].classList.remove("active")
    cvvOnCard.innerText = element.target.value
}
function showError(element,error,errText){
    element.style.cssText = "border:1px solid hsl(0, 100%, 66%)"
    error.classList.add("active")
    error.innerText=errText

}
function checkName(){
    if(nameIp.value==null || nameIp.value.trim().length==0){
        errText="Name can not be empty"
        showError(nameIp,error[0],errText)
        flag=0
    }
    else{
        let nameArr=nameIp.value.split('')
        arr2.forEach(element=>{
            for(let i = 0 ; i<nameIp.value.length;i++){
                if(nameArr[i]==element){
                    errText="Alphabets Only"
                    showError(nameIp,error[0],errText)
                    flag=0
                }
            }
        })
    }
}

function checkNumber(){
    if(numIp.value==null || numIp.value.trim().length==0){
        errText="Number can not be empty"
        showError(numIp,error[1],errText)
        flag=0
    }
    else if( numIp.value.split('').length < 16){
        errText="Number is incomplete"
        showError(numIp,error[1],errText)
        flag=0
    }
    else{
        for(let i = 0 ;i<16 ; i++){
            let a=numIp.value.charCodeAt(i)>=48 && numIp.value.charCodeAt(i)<=57
            if(!a){
                errText="Number must contain only numbers"
                showError(numIp,error[1],errText)
                flag=0
            }
        }
    }
}
function checkDate(){
    // console.log(yearIp.value)
    if(monthIp.value==null || monthIp.value.trim().length==0 || yearIp.value==null || yearIp.value.trim().length==0){
        errText="Dates cannot be empty"
        showError(monthIp,error[2],errText)
        showError(yearIp,error[2],errText)
        flag=0
    }
    else if(monthIp.value>12){
        errText= "Incorrect Month"
        showError(monthIp,error[2],errText,errText)
        flag=0
    }
    else if( parseInt(yearIp.value) < 23  ){
        console.log("enter")
        errText="Incorrect Year"
        showError(yearIp,error[2],errText)
        flag=0
    }
    else{
        for(let i = 0 ;i<2;i++){
            let b = yearIp.value.charCodeAt(i)>=48 && yearIp.value.charCodeAt(i)<=57
            if(!b){
                errText="Only numbers allowed"
                showError(yearIp,error[2],errText)
                flag=0
            }
        }
        for(let i =0;i<1;i++){
            a= monthIp.value.charCodeAt(i)>=48 && monthIp.value.charCodeAt(i)<=57
            if(!a){
                errText="Only numbers allowed"
                showError(monthIp,error[2],errText)
                flag=0
            }
        }
    }
}
function checkCvv(){
    if(cvvIp.value==null || cvvIp.value.trim().length==0){
        errText="CVV can not be empty"
        showError(cvvIp,error[3],errText)
        flag=0
    }
    else if(cvvIp.value.split('').length<3){
        errText="Incomplete CVV"
        showError(cvvIp,error[3],errText)
        flag=0
    }
    else{
        for(let i = 0 ; i<2 ; i++){
            a=cvvIp.value.charCodeAt(i)>=48 && cvvIp.value.charCodeAt(i)<=57
            if(!a){
                errText="only numbers allowed"
                showError(cvvIp,error[3],errText)
                flag=0
            }
        }
        
    }
}

resetAll()
numIp.addEventListener("input",setNum)
nameIp.addEventListener("input",setName)
monthIp.addEventListener("input",setMonth)
yearIp.addEventListener("input",setYear)
cvvIp.addEventListener("input",setCvv)
confirmBtn.addEventListener("click",()=>{
    flag=1
    checkName()
    checkNumber()
    checkDate()
    checkCvv()
    if(flag==1){
        cardContainer.classList.remove("activeContainer")
        thankYou.classList.add("activeContainer")
       
    }
})

cont.addEventListener("click",()=>{
    thankYou.classList.remove("activeContainer")
    cardContainer.classList.add("activeContainer")
    resetAll()

})