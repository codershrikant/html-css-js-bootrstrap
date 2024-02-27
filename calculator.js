document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('cal-birthday');

    // Add event listeners for focus and blur events to dynamically change the input type
    dateInput.addEventListener('focus', () => dateInput.type = 'date');
    dateInput.addEventListener('blur', () => dateInput.type = 'text');
});

// Variables for age calculator
const cal_btnEl = document.getElementById('cal-btn');
const cal_birthdayEl = document.getElementById('cal-birthday');
const cal_resultEl = document.getElementById('cal-result');

// Variables for tip calculator
const tip_btnEl = document.getElementById('tip-calculate');
const tip_billInput = document.getElementById('tip-bill');
const tip_Input = document.getElementById('tip-tip');
const tip_totalSpan = document.getElementById('tip-total');

// Function to calculate age
const calculateAge = () => {
    const cal_birthdayValue = cal_birthdayEl.value;
    if (!cal_birthdayValue) {
        console.log('Please enter your birthday');
    } else {
        const age = getAge(cal_birthdayValue);
        cal_resultEl.innerText = `Your age is ${age} ${age > 1 ? 'years' : 'year'} old`;
    }
};

// Function to get age
const getAge = (birthdayValue) => {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }
    return age;
};

// Function to calculate total tip
const calculateTotalTip = () => {
    const billValue = tip_billInput.value;
    const tipValue = tip_Input.value;
    const totalValue = billValue * (1 + tipValue / 100);
    tip_totalSpan.innerText = totalValue.toFixed(2);
};

// Event listeners for age and tip calculators
cal_btnEl.addEventListener('click', calculateAge);
tip_btnEl.addEventListener('click', calculateTotalTip);
