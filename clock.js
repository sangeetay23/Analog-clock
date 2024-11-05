const hourHand = document.getElementById('hour-hand');
const minHand = document.getElementById('min-hand');
const secHand = document.getElementById('sec-hand');
const toggleButton = document.getElementById('toggle-button');

const arabicNumerals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
let useRoman = false; 

function toggleNumerals() {
    useRoman = !useRoman;
    const numbers = document.querySelectorAll('.number');
    numbers.forEach((number, index) => {
        number.textContent = useRoman ? romanNumerals[index] : arabicNumerals[index];
    });
    toggleButton.textContent = useRoman ? "Toggle Arabic Numerals" : "Toggle Roman Numerals";
}
toggleButton.addEventListener('click', toggleNumerals);

function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours * 30) + (minutes / 2); 
    const minDeg = minutes * 6;
    const secDeg = seconds * 6; 

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    secHand.style.transform = `rotate(${secDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
toggleNumerals();