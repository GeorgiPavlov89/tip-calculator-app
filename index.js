const billInput = document.getElementById('billInput');
const peopleInput = document.getElementById('peopleInput');
const amountResult = document.getElementById('tipAmount');
const totalResult = document.getElementById('total')
const btns = document.getElementsByClassName('btn')

Array.from(btns).forEach(function (elm) {
    elm.addEventListener('click', calculateHandler)
})

function calculateHandler() {

    console.log("iam clicked");
}