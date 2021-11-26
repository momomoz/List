function append(selector, newContent){
    let content = document.querySelector(selector).innerHTML
    content += newContent
    document.querySelector(selector).innerHTML = content
    console.log(newContent)
}

function remove(selector, newContent){
    let content = document.querySelector(selector).innerHTML
    content -= newContent
    document.querySelector(selector).innerHTML = content
    console.log(newContent)
}

let btn = document.querySelector("#btn")

btn1.addEventListener('click', function(){
    let userText = document.querySelector("#inp").value
    append("#list", `<li>${userText}</li>`) 
    btn2.addEventListener(`click`, function(){
        let userText = document.querySelector(`#list`).value
        remove("#list", `<li>${userText}</li>`)
    })
    
})



