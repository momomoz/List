let btn = document.querySelector(".myBtn");
let addDiv = $(".add");
let number = 0;

let arrayAccount = JSON.parse(localStorage.getItem("arrayAccount"));

let bigArray = JSON.parse(localStorage.getItem("bigArray"));


function deleteItem(value){
    console.log(value)
    let bigArray = JSON.parse(localStorage.getItem("bigArray"));
    for (let i = 0; i < bigArray.length; i++) {
        if (bigArray[i].name == value){
            bigArray.splice(i, 1);
            break;
        }
    }

    localStorage.setItem('bigArray', JSON.stringify(bigArray));
    location.reload();
}


function completeItem(value){
    console.log(value)
    let bigArray = JSON.parse(localStorage.getItem("bigArray"));
    for (let i = 0; i <= bigArray.length; i++) {
        if (bigArray[i].name == value){
            location.href = "index.html"
            break;
        }
    }

    localStorage.setItem('bigArray', JSON.stringify(bigArray));
    // location.reload();
}


btn.addEventListener('click', () => {
    number++;
    let a = prompt('Введите названия своего списка:');
    addDiv.append(`
    <div onclick="completeItem('${a}')" id='add_block${number}'>
                <div class="add_block">
                    <div class="delete">
                        <button class="button" onclick="deleteItem('${a}')" id="button${number}">
                            <img src="./img/red-cross-md_0.png" width="35px" alt="">
                        </button>
                        
                    </div>
                    
                </div>
                <h2 class="center">${a}</h2>
            </div>
    `)


    let Object = {
        name: a,
        item:[{
            date: arrayAccount
        }]
    }

    let bigArray = JSON.parse(localStorage.getItem("bigArray"));
    if(bigArray === null){
        bigArray = [];
    }

    bigArray.push(Object);

    localStorage.setItem("bigArray", JSON.stringify(bigArray));
    console.log(bigArray);  
})

console.log(bigArray)

function first(){
    for(let i = 0; i < bigArray.length; i++){
        number++;
        addDiv.append(`
            <div onclick="completeItem('${bigArray[i].name}')" id='add_block${number}'>
                        <div class="add_block">
                            <div class="delete">
                                <button class="button" onclick="deleteItem('${bigArray[i].name}')" id="button${number}">
                                    <img src="./img/red-cross-md_0.png" width="35px" alt="">
                                </button>
                            </div>
                        </div>
                        <h2 class="center">${bigArray[i].name}</h2>
                    </div>
            `)
            let addBlock = $(`#add_block${number}`);

            // addBlock.addEventListener('click', () => {
            //     console.log('asd');
            //     // location.href = "index.html"
            // })

            
            let deleteBtn = document.querySelector(`#button${number}`);
                    
            deleteBtn.addEventListener('click', () => {
                addBlock.css('display', 'none'); 
            })

            
    }
}

first();