const nameInp = document.querySelector("#name-inp")
const emailInp = document.querySelector("#email-inp")
const webInp = document.querySelector("#web-inp")
const imageInp = document.querySelector("#image-inp")
const male = document.querySelector("#male")
const female = document.querySelector("#female")
const html = document.querySelector("#html")
const css = document.querySelector("#css")
const java = document.querySelector("#java")
var table = document.querySelector(".table")
const enroll = document.querySelector("#enroll")
const skillBoxes = document.querySelectorAll(".skillss")
const clear = document.querySelector("#clear")
var gender = ""
let i=1
let knownSkills = ""
enroll.addEventListener('click',()=>{
    table.classList.add('show')
    if(nameInp.value =="" || emailInp.value=="" || webInp.value=="" || imageInp.value == ""){
        
        alert("please enter valid details")
    }else{
        if(male.checked){
            gender = male.value
        }else if(female.checked){
            gender = female.value
        }else{
            alert('please select a valid option')
        }
        
    }
    for(let knownSk of skillBoxes){
        if(knownSk.checked == true){
            knownSkills+=knownSk.value
            knownSkills+=" "
            console.log(knownSk)
        }
    }
     
    var newRow = table.insertRow(i)
    var cell1 = newRow.insertCell(0)
    var cell2 = newRow.insertCell(1)
    cell1.innerHTML = `<p>${nameInp.value}</p>
    <p>${emailInp.value}</p>
    <p>${webInp.value}</p>
    <p>${gender}</p>
    <p>${knownSkills}</p>
    
    
    `
  
    
    cell2.innerHTML = `<div><img src = ${imageInp.value}></div>`
    i++
    knownSkills=""
  

})

clear.addEventListener('click',()=>{
    let allInp = document.querySelectorAll("input[type=text]")
    let entMail = document.querySelector("input[type=email]")
    let allCheck = document.querySelectorAll("input[type = checkbox]")
    let allRadio = document.querySelectorAll("input[type = radio]")

    for(let el of allInp){
        el.value = ""
    }
    for(let el of allCheck){
        if(el.checked == true){
            el.checked = false
        }
    }
    for(let el of allRadio){
        if(el.checked == true){
            el.checked = false
        }
    }
    entMail.value = ""

})

// imagelinks
// 1.https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elm030119cetomhollandnature-001-1561051667.jpg

// 2.https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60

// 3.https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60

// 4.https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60