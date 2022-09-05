import CreateRow from "./src/create_row.js";
import { AllAlgos } from "./src/data.js";

(function PopulateTables() {
    let e = 0;
    let i = 0;
    let h = 0;
    for (let k = 0; k < AllAlgos.length; k++) {
        CreateRow(AllAlgos[k]);
        if (AllAlgos[k].difficulty.toLowerCase() === 'easy' && AllAlgos[k].complete === true) {
            e++;
        } else if (AllAlgos[k].difficulty.toLowerCase() === 'medium' && AllAlgos[k].complete === true) {
            i++;
        } else if (AllAlgos[k].difficulty.toLowerCase() === 'hard' && AllAlgos[k].complete === true) {
            h++;
        }
    }

    const $easyTotal = document.getElementById('easy-total');
    $easyTotal.textContent = e;
    const $intermediateTotal = document.getElementById('medium-total');
    $intermediateTotal.textContent = i;
    const $hardTotal = document.getElementById('hard-total');
    $hardTotal.textContent = h;
    const $questionTotal = document.getElementById('total-questions');
    $questionTotal.textContent = Number(e) + Number(i) + Number(h);
} ())

