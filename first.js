let btn = document.querySelector(".myBtn");
let addDiv = $(".add");


btn.addEventListener('click', () => {
    addDiv.append(`
    <div>
        <div class="add_block">
            
        </div>
        <h2 class="center">QWERTY</h2>
    </div>
    `)
})