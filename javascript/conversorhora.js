const tempo = document.getElementById('ba');
const secToMin = document.getElementById('secToMin');
const secToHour = document.getElementById('secToHour');
const secToYear = document.getElementById('secToYear');
const minToSec = document.getElementById('minToSec');
const minToHour = document.getElementById('minToHour');
const minToYear = document.getElementById('minToYear');
const hourToSec = document.getElementById('hourToSec');
const hourToMin = document.getElementById('hourToMin');
const hourToYear = document.getElementById('hourToYear');
const yearToSec = document.getElementById('yearToSec');
const yearToMin = document.getElementById('yearToMin');
const yearToHour = document.getElementById('yearToHour');
const resultTime = document.getElementById('resultTime');
let temp_2;

function convertTime() {
    temp_2 = Number(tempo.value);
    if (temp_2 <= 0) {
        resultTime.textContent = 'O mínimo a ser convertido é 1!';
    } else {
        if (secToMin.checked) {
            temp_2 = temp_2 / 60;
            resultTime.textContent = (temp_2 < 2) ? temp_2 + ' minuto' : temp_2 + ' minutos';
        } else if (secToHour.checked) {
            temp_2 = temp_2 / 3600;
            resultTime.textContent = (temp_2 < 2) ? temp_2 + ' hora' : temp_2 + ' horas';
        } else if (secToYear.checked) {
            temp_2 = temp_2 / (60 * 60 * 24 * 365);
            resultTime.textContent = (temp_2 < 2) ? temp_2 + ' ano' : temp_2 + ' anos';
        } else if (minToSec.checked) {
            temp_2 = temp_2 * 60;
            resultTime.textContent = (temp_2 < 2) ? temp_2 + ' segundo' : temp_2 + ' segundos';
        } else if (minToHour.checked) {
            temp_2 = temp_2 / 60;
            resultTime.textContent = (temp_2 < 2) ? temp_2 + ' hora' : temp_2 + ' horas';
        } else if (minToYear.checked) {
            temp_2 = temp_2 / 526000;
            resultTime.textContent = (temp_2 < 2) ? temp_2 + ' ano' : temp_2 + ' anos';
        } else if (hourToSec.checked) {
            temp_2 = temp_2 * 3600;
            resultTime.textContent = (temp_2 < 2) ? temp_2 + ' segundo' : temp_2 + ' segundos';
        } else if (hourToMin.checked) {
            temp_2 = temp_2 * 60;
            resultTime.textContent = (temp_2 < 2) ? temp_2 + ' minuto' : temp_2 + ' minutos';
        } else if (hourToYear.checked) {
            temp_2 = temp_2 / 8760;
            resultTime.textContent = (temp_2 < 2) ? temp_2 + ' ano' : temp_2 + ' anos';
        } else if (yearToSec.checked) {
            temp_2 = temp_2 * 365 * 24 * 60 * 60;
            resultTime.textContent = (temp_2 < 2) ? temp_2 + ' segundo' : temp_2 + ' segundos';
        } else if (yearToMin.checked) {
            temp_2 = temp_2 * 526000;
            resultTime.textContent = (temp_2 < 2) ? temp_2 + ' minuto' : temp_2 + ' minutos';
        } else if (yearToHour.checked) {
            temp_2 = temp_2 * 8760;
            resultTime.textContent = (temp_2 < 2) ? temp_2 + ' hora' : temp_2 + ' horas';
        } else {
            resultTime.textContent = 'Escolha ao menos um conversor';
        }
    }
}
