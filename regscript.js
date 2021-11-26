let email1 = document.querySelector("#email");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let pw = document.querySelector('#passwordInput');
let code = (Math.floor(Math.random() * 1000000))
let nickname = document.querySelector('#nickname');


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}





function sendEm() {
    let templateParams = {
        from_name: 'Asselina',
        ver_code: code,
        to_email: `${email1.value}`
    };
    emailjs.send('service_89b1wzg', 'template_tbbrbab', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });

}

btn1.addEventListener('click', function () {
    sendEm()
})

btn2.addEventListener('click', function () {
    let verCode = document.querySelector("#ver").value

    if (code == verCode) {

        let Account = {
            email: email1.value,
            nickname: nickname.value,
            password: pw.value,
        }
        let arrayAccount = JSON.parse(localStorage.getItem("arrayAccount"));
        if (arrayAccount === null) {
            arrayAccount = [];
        }
        arrayAccount.push(Account);
        localStorage.setItem("arrayAccount", JSON.stringify(arrayAccount));
        console.log(arrayAccount);
        console.log("You signed up!");
        // window.location.href = "main.html"
    } else {
        console.log("WRONG CODE!")
    }
})






let arrayAccount = JSON.parse(localStorage.getItem("arrayAccount"))
console.log(arrayAccount);

//let storedEmail = localStorage.getItem('email');

let btnSecond = document.getElementById('btnSecond');

btnSecond.addEventListener('click', () => {
    let nickname2 = document.getElementById('nickname2');
    let passwordInput2 = document.getElementById('passwordInput2');
    let arrayAccount = JSON.parse(localStorage.getItem("arrayAccount"));
    if (arrayAccount === null) {
        user = [];
    }

    arrayAccount.map(item => {
        if (item.nickname === nickname2.value && item.password === passwordInput2.value) {
            window.location.href = "main.html"
        }
    })
})
