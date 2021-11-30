let input = document.querySelector("#input");
let addBtn = document.querySelector("#add_btn");
let number = 0;
let list = $(".list");


let backBtn = document.querySelector(".back");

let arrayAccount = JSON.parse(localStorage.getItem("arrayAccount"));






backBtn.addEventListener('click', () => {
    location.href = "first.html"
});


function completeItem(value){    
    // console.log(value)
    let arrayAccount = JSON.parse(localStorage.getItem("arrayAccount"));
    // console.log(arrayAccount)
    for (let i = 0; i < arrayAccount.length; i++) {
        if (arrayAccount[i].product == value) {
            arrayAccount[i].dell = false;
            
            break;
        }
        
    }

    for(let i = 0; i < arrayAccount.length; i++){
        if(arrayAccount[i].dell === false){
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
                console.log(arrayAccount[i].product)
        }
    }

    
    localStorage.setItem('arrayAccount', JSON.stringify(arrayAccount));
    // console.log(JSON.stringify(arrayAccount))
    location.reload();
}



function deleteItem(value){
    console.log(value)
    let arrayAccount = JSON.parse(localStorage.getItem("arrayAccount"));
    for (let i = 0; i < arrayAccount.length; i++) {
        if (arrayAccount[i].product == value) {
            arrayAccount.splice(i, 1);
            break;
        }
    }

    localStorage.setItem('arrayAccount', JSON.stringify(arrayAccount));
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

    let arrayAccount = JSON.parse(localStorage.getItem("arrayAccount"));
    if (arrayAccount === null) {
        arrayAccount = [];
    }

    arrayAccount.push(Product);
    localStorage.setItem("arrayAccount", JSON.stringify(arrayAccount));
    console.log(arrayAccount);
});



function first() {
    
    for (let i = 0; i < arrayAccount.length; i++){
        if(arrayAccount[i].dell === true){
            list.append(
                `<div class="list_block" id="list_block_${number}">
                    <h2>- ${arrayAccount[i].product}</h2>

                    <div class="click">
                        <button class="completed_btn" onclick="completeItem('${arrayAccount[i].product}')" id="completed_btn_${number}">
                            <img src="./img/unnamed.png" width="30px" alt="">
                        </button>
                        <button class="croos_btn" onclick="deleteItem('${arrayAccount[i].product}')" id="croos_btn_${number}">
                            <img src="./img/red-cross-md_0.png" width="30px" height="30px" alt="">
                        </button>
                    </div>
                </div>`
            )
        } else{
            list.append(`
            <div class="list_block" id="list_block_${number}">
                <h2><del>- ${arrayAccount[i].product}</del></h2>
                <div class="click">
                    <button class="completed_btn" onclick="completeItem('${arrayAccount[i].product}')" id="completed_btn_${number}">
                        <img src="./img/unnamed.png" width="30px" alt="">
                    </button>
                    <button class="croos_btn" onclick="deleteItem('${arrayAccount[i].product}')" id="croos_btn_${number}">
                        <img src="./img/red-cross-md_0.png" width="30px" height="30px" alt="">
                    </button>
                </div>
            </div>
            `)
        }
    }
}


first();