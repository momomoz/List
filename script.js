let input = document.querySelector("#input");
let addBtn = document.querySelector("#add_btn");
let number = 0;
let list = $(".list");

let currentListIndex = JSON.parse(localStorage.getItem("currentListIndex"));
console.log(currentListIndex);


let backBtn = document.querySelector(".back");

let arrayAccount = JSON.parse(localStorage.getItem("arrayAccount"));
let bigArray = JSON.parse(localStorage.getItem("bigArray"));

console.log(bigArray);





backBtn.addEventListener('click', () => {
    location.href = "first.html"
});


function completeItem(value){    
    // console.log(value)
    let bigArray = JSON.parse(localStorage.getItem("bigArray"));
    // console.log(arrayAccount)
    for (let i = 0; i < bigArray[currentListIndex].item[0].date.length; i++) {
        if (bigArray[currentListIndex].item[0].date[i].product == value) {
            bigArray[currentListIndex].item[0].date[i].dell = false;
            
            break;
        }
        
    }

    for(let i = 0; i < bigArray[currentListIndex].item[0].date.length; i++){
        if(bigArray[currentListIndex].item[0].date[i].dell === false){
            // console.log('asd');
            // list.append(
            //     `
            //     <div class="list_block" id="list_block_${number}">
            //         <h2><del>- ${arrayAccount[i].product}</del></h2>
            //         <div class="click">
            //             <button class="completed_btn" onclick="completeItem('${arrayAccount[i].product}')" id="completed_btn_${number}">
            //                 <img src="./img/unnamed.png" width="30px" alt="">
            //             </button>
            //             <button class="croos_btn" onclick="deleteItem('${arrayAccount[i].product}')" id="croos_btn_${number}">
            //                 <img src="./img/red-cross-md_0.png" width="30px" height="30px" alt="">
            //             </button>
            //         </div>
            //     </div>
            //     `);
                console.log(bigArray[currentListIndex].item[0].date[i].product)
        }
    }

    
    localStorage.setItem('bigArray', JSON.stringify(bigArray));
    // console.log(JSON.stringify(arrayAccount))
    // location.reload();
}



function deleteItem(value){
    console.log(value)
    let bigArray = JSON.parse(localStorage.getItem("bigArray"));
    for (let i = 0; i < bigArray[currentListIndex].item[0].date.length; i++) {
        if (bigArray[currentListIndex].item[0].date[i].product == value) {
            bigArray[currentListIndex].item[0].date.splice(i, 1);
            break;
        }
    }

    localStorage.setItem('bigArray', JSON.stringify(bigArray));
    location.reload();
}

addBtn.addEventListener('click', () => {

    number++;

    let inputValue = input.value;    


    list.append(`
    <div class="list_block" id="list_block_${number}">
                <h2>- ${inputValue}</h2>
                <div class="click">
                    <button class="completed_btn" onclick="completeItem('${inputValue}')" id="completed_btn_${number}">
                        <img src="./img/unnamed.png" width="30px" alt="">
                    </button>
                    <button class="croos_btn" onclick="deleteItem('${inputValue}')" id="croos_btn_${number}">
                        <img src="./img/red-cross-md_0.png" width="30px" height="30px" alt="">
                    </button>
                </div>
            </div>
    `);


    let completedBtn = document.querySelector(`#completed_btn_${number}`);
    let crossBtn = document.querySelector(`#croos_btn_${number}`);
    let listBlock = $(`#list_block_${number}`);


    // кнопка выполн.
    completedBtn.addEventListener('click', () => {

        listBlock.empty();
        listBlock.append(`
                <h2><del>- ${inputValue}</del></h2>
                <div class="click">
                    <button class="completed_btn" onclick="completeItem('${inputValue}')" id="completed_btn_${number}">
                        <img src="./img/unnamed.png" width="30px" alt="">
                    </button>
                    <button class="croos_btn" onclick="deleteItem('${inputValue}')" id="croos_btn_${number}">
                        <img src="./img/red-cross-md_0.png" width="30px" height="30px" alt="">
                    </button>
                </div>

            `);    
    });

    // кнопка удалить
    crossBtn.addEventListener('click', () => {
        listBlock.empty();
    });


    let Product = {
        product: inputValue,
        //
        dell: true//
    }

    let bigArray = JSON.parse(localStorage.getItem("bigArray"));
    if(bigArray === null){
        bigArray = [];
    }

    bigArray[currentListIndex].item[0].date.push(Product)
    // arrayAccount.push(Product);
    localStorage.setItem("bigArray", JSON.stringify(bigArray));
    console.log("added")
    console.log(bigArray);
});



function first() {
    
    for (let i = 0; i < bigArray[currentListIndex].item[0].date.length; i++){
        if(bigArray[currentListIndex].item[0].date[i].dell === true){
            list.append(
                `<div class="list_block" id="list_block_${number}">
                    <h2>- ${bigArray[currentListIndex].item[0].date[i].product}</h2>

                    <div class="click">
                        <button class="completed_btn" onclick="completeItem('${bigArray[currentListIndex].item[0].date[i].product}')" id="completed_btn_${number}">
                            <img src="./img/unnamed.png" width="30px" alt="">
                        </button>
                        <button class="croos_btn" onclick="deleteItem('${bigArray[currentListIndex].item[0].date[i].product}')" id="croos_btn_${number}">
                            <img src="./img/red-cross-md_0.png" width="30px" height="30px" alt="">
                        </button>
                    </div>
                </div>`
            )
        } else{
            list.append(`
            <div class="list_block" id="list_block_${number}">
                <h2><del>- ${bigArray[currentListIndex].item[0].date[i].product}</del></h2>
                <div class="click">
                    <button class="completed_btn" onclick="completeItem('${bigArray[currentListIndex].item[0].date[i].product}')" id="completed_btn_${number}">
                        <img src="./img/unnamed.png" width="30px" alt="">
                    </button>
                    <button class="croos_btn" onclick="deleteItem('${bigArray[currentListIndex].item[0].date[i].product}')" id="croos_btn_${number}">
                        <img src="./img/red-cross-md_0.png" width="30px" height="30px" alt="">
                    </button>
                </div>
            </div>
            `)
        }
    }
}


first();