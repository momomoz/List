function append(selector, newContent){
    let content = document.querySelector(selector).innerHTML
    content += newContent
    document.querySelector(selector).innerHTML = content
    console.log(newContent)
}

let btn = document.querySelector("#btn")

btn.addEventListener('click', function(){
    let userText = document.querySelector("#inp").value
    append("#list", `<li>${userText}</li>`)
})

