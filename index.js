const billInput = document.getElementById('billInput');
const peopleInput = document.getElementById('peopleInput');
const amountResult = document.getElementById('tipResult');
const totalResult = document.getElementById('totalResult')
const btns = document.getElementsByClassName('btn')
const customInput = document.getElementById('custom')
const buttons = document.getElementById('buttons').onclick = calculateHandler





function calculateHandler(e) {

    const custom = customInput.value
    const people = peopleInput.value
    const bill = billInput.value
    const tip = e.target.value / 100
    const singleTip = (bill * tip) / people
    const partialBill = bill / people
    const total = partialBill + singleTip
    const error = document.getElementById('error')
    if (people > 0 && custom == 0) {

        peopleInput.style.borderColor = "hsl(172, 67%, 45%)"
        amountResult.innerText = "$" + singleTip.toFixed(2)
        totalResult.innerText = "$" + total.toFixed(2)
        error.classList.add("hide-error")
    } else if (people > 0 && custom > 0) {

        const customTip = e.target.value / 100
        const singleCustomTip = (bill * customTip) / people
        amountResult.innerText = "$" + singleCustomTip.toFixed(2)
        totalResult.innerText = "$" + total.toFixed(2)




    } else {
        peopleInput.style.borderColor = "red"
        error.classList.remove("hide-error")

    }

}

