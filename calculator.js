// variable for age calculator
const cal_btnEl = document.getElementById("cal-btn");
const cal_birthdayEl = document.getElementById("cal-birthday")
const cal_resultEl = document.getElementById("cal-result")

// variables for tip calculator
const tip_btnEl = document.getElementById("tip-calculate")
const tip_billInput = document.getElementById("tip-bill")
const tip_Input = document.getElementById("tip-tip")
const tip_totalSpan = document.getElementById("tip-total")


// first function for age calculator
function calculateAge() {
    const cal_birthdayValue = cal_birthdayEl.value;
    if (cal_birthdayValue == "") {
        console.log("Please enter your birthday")
    } else {
        const age = getAge(cal_birthdayValue);
        cal_resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}
// second function for age calculator
function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (
        month < 0  || (month === 0 && currentDate.getDate() < birthdayDate.getDate())
        ) {
            age--;
        }   
    return age;
}

function calculateTotalTip() {
    const billValue = tip_billInput.value;
    const tipValue = tip_Input.value;
    const totalValue = billValue * (1 + tipValue / 100);
    tip_totalSpan.innerText = totalValue.toFixed(2)
}
// event listener for age calculator
cal_btnEl.addEventListener("click", calculateAge)
// event listener for tip calculator
tip_btnEl.addEventListener("click", calculateTotalTip);