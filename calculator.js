let billAmountE1 = document.getElementById("billAmount")
let percentageTipE1 = document.getElementById("percentageTip")
let tipAmount = document.getElementById("tipAmount")
let totalAmount = document.getElementById("totalAmount")
let errorMessage = document.getElementById("errorMessage")


function calculateTotal() {
    let billAmount = billAmountE1.value
    let percentageTip = percentageTipE1.value
    if (billAmount === "") {
        errorMessage.textContent = "Please Enter a Valid Input"
        errorMessage.style.color = "red"
    } else if (percentageTip === "") {
        errorMessage.textContent = "Please Enter a Valid Input"
        errorMessage.style.color = "red"

    } else {
        errorMessage.textContent = ""
        let calculatedTip = (parseInt(percentageTip) / 100) * parseInt(billAmount)
        tipAmount.value = calculatedTip
        let calculatedTotal = parseInt(billAmount) + calculatedTip
        totalAmount.value = calculatedTotal
    }
}